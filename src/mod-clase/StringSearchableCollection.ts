import {SearchableCollection} from "./SearchableCollection";

export class StringSearchableCollection extends SearchableCollection<string> {
    constructor(public collection: string[]){
        super(collection);
    }
    /**
     * Función search que viene de la interfaz genérica Searchable.
     * @param item Item a buscar dentro de la collección.
     * @returns Deuelve un array con el elemento buscado el numero de veces que aparece.
     */
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