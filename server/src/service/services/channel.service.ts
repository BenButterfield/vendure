import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { CreateChannelInput, CurrencyCode, UpdateChannelInput } from '../../../../shared/generated-types';
import { DEFAULT_CHANNEL_CODE } from '../../../../shared/shared-constants';
import { ID } from '../../../../shared/shared-types';
import { unique } from '../../../../shared/unique';
import { RequestContext } from '../../api/common/request-context';
import { DEFAULT_LANGUAGE_CODE } from '../../common/constants';
import { ChannelNotFoundError, EntityNotFoundError, InternalServerError } from '../../common/error/errors';
import { ChannelAware } from '../../common/types/common-types';
import { assertFound } from '../../common/utils';
import { ConfigService } from '../../config/config.service';
import { Channel } from '../../entity/channel/channel.entity';
import { Zone } from '../../entity/zone/zone.entity';
import { getEntityOrThrow } from '../helpers/utils/get-entity-or-throw';
import { patchEntity } from '../helpers/utils/patch-entity';

@Injectable()
export class ChannelService {
    private allChannels: Channel[] = [];

    constructor(@InjectConnection() private connection: Connection, private configService: ConfigService) {}

    /**
     * When the app is bootstrapped, ensure a default Channel exists and populate the
     * channel lookup array.
     */
    async initChannels() {
        await this.ensureDefaultChannelExists();
        await this.updateAllChannels();
    }

    /**
     * Assigns a ChannelAware entity to the default Channel as well as any channel
     * specified in the RequestContext.
     */
    assignToChannels<T extends ChannelAware>(entity: T, ctx: RequestContext): T {
        const channelIds = unique([ctx.channelId, this.getDefaultChannel().id]);
        entity.channels = channelIds.map(id => ({ id })) as any;
        return entity;
    }

    /**
     * Given a channel token, returns the corresponding Channel if it exists.
     */
    getChannelFromToken(token: string): Channel {
        if (this.allChannels.length === 1 || token === '') {
            // there is only the default channel, so return it
            return this.getDefaultChannel();
        }
        const channel = this.allChannels.find(c => c.token === token);
        if (!channel) {
            throw new ChannelNotFoundError(token);
        }
        return channel;
    }

    /**
     * Returns the default Channel.
     */
    getDefaultChannel(): Channel {
        const defaultChannel = this.allChannels.find(channel => channel.code === DEFAULT_CHANNEL_CODE);

        if (!defaultChannel) {
            throw new InternalServerError(`error.default-channel-not-found`);
        }
        return defaultChannel;
    }

    findAll(): Promise<Channel[]> {
        return this.connection
            .getRepository(Channel)
            .find({ relations: ['defaultShippingZone', 'defaultTaxZone'] });
    }

    findOne(id: ID): Promise<Channel | undefined> {
        return this.connection
            .getRepository(Channel)
            .findOne(id, { relations: ['defaultShippingZone', 'defaultTaxZone'] });
    }

    async create(input: CreateChannelInput): Promise<Channel> {
        const channel = new Channel(input);
        if (input.defaultTaxZoneId) {
            channel.defaultTaxZone = await getEntityOrThrow(this.connection, Zone, input.defaultTaxZoneId);
        }
        if (input.defaultShippingZoneId) {
            channel.defaultShippingZone = await getEntityOrThrow(
                this.connection,
                Zone,
                input.defaultShippingZoneId,
            );
        }
        const newChannel = await this.connection.getRepository(Channel).save(channel);
        await this.updateAllChannels();
        return channel;
    }

    async update(input: UpdateChannelInput): Promise<Channel> {
        const channel = await this.findOne(input.id);
        if (!channel) {
            throw new EntityNotFoundError('Channel', input.id);
        }
        const updatedChannel = patchEntity(channel, input);
        if (input.defaultTaxZoneId) {
            updatedChannel.defaultTaxZone = await getEntityOrThrow(
                this.connection,
                Zone,
                input.defaultTaxZoneId,
            );
        }
        if (input.defaultShippingZoneId) {
            updatedChannel.defaultShippingZone = await getEntityOrThrow(
                this.connection,
                Zone,
                input.defaultShippingZoneId,
            );
        }
        await this.connection.getRepository(Channel).save(updatedChannel);
        await this.updateAllChannels();
        return assertFound(this.findOne(channel.id));
    }

    /**
     * There must always be a default Channel. If none yet exists, this method creates one.
     * Also ensures the default Channel token matches the defaultChannelToken config setting.
     */
    private async ensureDefaultChannelExists() {
        const { defaultChannelToken } = this.configService;
        const defaultChannel = await this.connection.getRepository(Channel).findOne({
            where: {
                code: DEFAULT_CHANNEL_CODE,
            },
        });

        if (!defaultChannel) {
            const newDefaultChannel = new Channel({
                code: DEFAULT_CHANNEL_CODE,
                defaultLanguageCode: DEFAULT_LANGUAGE_CODE,
                pricesIncludeTax: false,
                currencyCode: CurrencyCode.USD,
                token: defaultChannelToken,
            });
            await this.connection.manager.save(newDefaultChannel);
        } else if (defaultChannelToken && defaultChannel.token !== defaultChannelToken) {
            defaultChannel.token = defaultChannelToken;
            await this.connection.manager.save(defaultChannel);
        }
    }

    private async updateAllChannels() {
        this.allChannels = await this.findAll();
    }
}
