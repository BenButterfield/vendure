/**
 * @description
 * The base class for all events used by the EventBus system.
 *
 * @docsCategory events
 * @docsWeight 1
 */
export abstract class VendureEvent {
    public readonly createdAt: Date;
    protected constructor() {
        this.createdAt = new Date();
    }
}
