export class Item {
    public id: string;
    public name: string;
    public description: string;
    public currentInventory: number;

    public constructor(init?: Partial<Item>) {
        Object.assign(this, init);
    }
}