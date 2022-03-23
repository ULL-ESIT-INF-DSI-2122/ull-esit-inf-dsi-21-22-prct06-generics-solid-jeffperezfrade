
export interface Collectable<T> {
    collection: T[];

    addItem(item: T): T[];
    getItem(index: number): T;
    removeItem(item: T): T[];
    getNumberOfItems(): number;
}