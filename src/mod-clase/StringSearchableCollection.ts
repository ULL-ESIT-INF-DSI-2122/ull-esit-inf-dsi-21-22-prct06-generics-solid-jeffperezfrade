import {SearchableCollection} from "./SearchableCollection";

export class StringSearchableCollection extends SearchableCollection<string> {
    constructor(public collection: string[]){
        super(collection);
    }
    search(item: string): string[] {
        let stringArray: string[] = [];
        for(let index: number = 0; index < this.collection.length; index++){
            if(this.collection[index] == item)
                stringArray.push(item);
        }
        return stringArray;
    }
}

const object = new StringSearchableCollection(['hola', 'que', 'tal', 'hola']);
console.log(object.getNumberOfItems());
console.log(object.addItem('como'));
console.log(object.removeItem('como'));
console.log(object.search('hola'));