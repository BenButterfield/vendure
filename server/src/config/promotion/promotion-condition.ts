import { ConfigArg } from '../../../../shared/generated-types';

import { ID } from '../../../../shared/shared-types';
import { OrderLine } from '../../entity';
import { Order } from '../../entity/order/order.entity';
import { argsArrayToHash, ConfigArgs, ConfigArgValues } from '../common/config-args';

export type PromotionConditionArgType = 'int' | 'money' | 'string' | 'datetime' | 'boolean' | 'facetValueIds';
export type PromotionConditionArgs = ConfigArgs<PromotionConditionArgType>;

/**
 * @description
 * An object containing utility methods which may be used in promotion `check` functions
 * in order to determine whether a promotion should be applied.
 *
 * @docsCategory promotions
 */
export interface PromotionUtils {
    /**
     * @description
     * Checks a given {@link OrderLine} against the facetValueIds and returns
     * `true` if the associated {@link ProductVariant} & {@link Product} together
     * have *all* the specified {@link FacetValue}s.
     */
    hasFacetValues: (orderLine: OrderLine, facetValueIds: ID[]) => Promise<boolean>;
}

/**
 * @description
 * A function which checks whether or not a given {@link Order} satisfies the {@link PromotionCondition}.
 *
 * @docsCategory promotions
 */
export type CheckPromotionConditionFn<T extends PromotionConditionArgs> = (
    order: Order,
    args: ConfigArgValues<T>,
    utils: PromotionUtils,
) => boolean | Promise<boolean>;

/**
 * @description
 * PromotionConditions are used to create {@link Promotion}s. The purpose of a PromotionCondition
 * is to check the order against a particular predicate function (the `check` function) and to return
 * `true` if the Order satisfies the condition, or `false` if it does not.
 *
 * @docsCategory promotions
 */
export class PromotionCondition<T extends PromotionConditionArgs = {}> {
    readonly code: string;
    readonly description: string;
    readonly args: PromotionConditionArgs;
    readonly priorityValue: number;
    private readonly checkFn: CheckPromotionConditionFn<T>;

    constructor(config: {
        args: T;
        check: CheckPromotionConditionFn<T>;
        code: string;
        description: string;
        priorityValue?: number;
    }) {
        this.code = config.code;
        this.description = config.description;
        this.args = config.args;
        this.checkFn = config.check;
        this.priorityValue = config.priorityValue || 0;
    }

    async check(order: Order, args: ConfigArg[], utils: PromotionUtils): Promise<boolean> {
        return await this.checkFn(order, argsArrayToHash<T>(args), utils);
    }
}
