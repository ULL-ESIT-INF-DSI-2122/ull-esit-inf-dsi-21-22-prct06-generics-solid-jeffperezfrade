import {Collectable} from "./Collectable";
import {Searchable} from "./Searchable";

export abstract class SearchableCollection<T> implements Collectable<T>, Searchable<T> {
    constructor(public collection: T[]){}

    addItem(item: T): T[] {
        this.collection.push(item);
        return this.collection;
    }

    getItem(index: number): T {
        return this.collection[index];
    }

    removeItem(item: T): T[] {
        const pos = this.collection.indexOf(item);
        if(pos != -1) this.collection.splice(pos, 1);
        return this.collection;
    }

    getNumberOfItems(): number {
        return this.collection.length;
    }

    abstract search(item: T): T[];
}