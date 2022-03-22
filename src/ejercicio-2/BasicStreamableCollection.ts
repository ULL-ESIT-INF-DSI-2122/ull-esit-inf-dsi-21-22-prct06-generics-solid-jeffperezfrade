import {Streamable} from "./Streamable";

export abstract class BasicStreamableCollection <T> implements Streamable <T> {
    constructor(public collection: T[]){}

    abstract searchElementInCollection(criteria: string[], value: string[]): T[];
    addElement(element: T): T[] {
        this.collection.push(element);
        return this.collection;
    }
    deleteElement(element: T): T[] {
        let index: number = this.collection.indexOf(element);
        if(index != -1) {
            // Eliminamos ese elemento.
            this.collection.splice(index, 1);
        }
        return this.collection;
    }
}