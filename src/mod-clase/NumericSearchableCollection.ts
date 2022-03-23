import {SearchableCollection} from "./SearchableCollection";

export class NumericSearchableCollection extends SearchableCollection<number> {
    constructor(public collection: number[]){
        super(collection);
    }
        /**
     * Función search que viene de la interfaz genérica Searchable.
     * @param item Item a buscar dentro de la collección.
     * @returns Deuelve un array con el elemento buscado el numero de veces que aparece.
     */
    search(item: number): number[] {
        let numberArray: number[] = [];
        for(let index: number = 0; index < this.collection.length; index++){
            if(this.collection[index] == item)
                numberArray.push(item);
        }
        return numberArray;
    }
}