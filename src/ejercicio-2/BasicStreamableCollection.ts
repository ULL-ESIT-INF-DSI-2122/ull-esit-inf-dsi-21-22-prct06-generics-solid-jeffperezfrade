import {Streamable} from "./Streamable";
/**
 * Clase abstracta genérica que implementa métodos de la interfaz genérica Streamable.
 */
export abstract class BasicStreamableCollection <T> implements Streamable <T> {
    /**
     * Constructor de la clase BasicStreamableCollection
     * @param collection Colección de elementos genérica.
     */
    constructor(public collection: T[]){}
    /**
     * Método genérico para añadir un elemento a la colección.
     * @param element Elemento genérico a añadir.
     * @returns Devuelve la colección actualizada.
     */
    addElement(element: T): T[] {
        this.collection.push(element);
        return this.collection;
    }
    /**
     * Método genérico para eliminar un elemento de la colección.
     * @param element Elemento a eliminar.
     * @returns Devuelve la colección actualizada.
     */
    deleteElement(element: T): T[] {
        let index: number = this.collection.indexOf(element);
        if(index != -1) {
            // Eliminamos ese elemento.
            this.collection.splice(index, 1);
        }
        return this.collection;
    }
    /**
     * Método abstracto para buscar un elemento en las subclases (estas subclases deben implementarlo).
     * @param criteria Criterios de búsqueda.
     * @param value Valores de búsqueda que deben coincidir.
     */
    abstract searchElementInCollection(criteria: string[], value: string[]): T[];
}