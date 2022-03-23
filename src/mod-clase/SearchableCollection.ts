import {Collectable} from "./Collectable";
import {Searchable} from "./Searchable";
/**
 * Clase abstracta genérica que implementa las funciones de la interfaz genérica Collectable.
 */
export abstract class SearchableCollection<T> implements Collectable<T>, Searchable<T> {
    constructor(public collection: T[]){}
    /**
     * Añade un item a la collección.
     * @param item Item para añadir.
     * @returns Devuelve la coleccion acutalizada.
     */
    addItem(item: T): T[] {
        this.collection.push(item);
        return this.collection;
    }
    /**
     * Devuelve el elemento de un indice en concreto.
     * @param index Devuelve el elemento del indice pasado por parametro.
     * @returns Devuelve el item en cuestion.
     */
    getItem(index: number): T {
        return this.collection[index];
    }
    /**
     * Elimina un elemento de la collecion.
     * @param item Item a eliminar.
     * @returns Devuelve la collecion actualizada.
     */
    removeItem(item: T): T[] {
        const pos = this.collection.indexOf(item);
        if(pos != -1) this.collection.splice(pos, 1);
        return this.collection;
    }
    /**
     * Devuelve el numero de elementos de la collecion.
     * @returns Devuelve el numero de elemetos de la collecion.
     */
    getNumberOfItems(): number {
        return this.collection.length;
    }
    /**
     * Metodo abstracto que será implementado por las sublcases.
     * @param item Item a buscar.
     */
    abstract search(item: T): T[];
}