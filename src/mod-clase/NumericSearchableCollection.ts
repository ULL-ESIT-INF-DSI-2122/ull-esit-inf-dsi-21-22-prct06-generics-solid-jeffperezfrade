import {SearchableCollection} from "./SearchableCollection";

export class NumericSearchableCollection extends SearchableCollection<number> {
    constructor(public collection: number[]){
        super(collection);
    }

    search(item: number): number[] {
        let numberArray: number[] = [];
        for(let index: number = 0; index < this.collection.length; index++){
            if(this.collection[index] == item)
                numberArray.push(item);
        }
        return numberArray;
    }
}