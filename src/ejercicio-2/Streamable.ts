/**
 * Interfaz genérica Streamable.
 */
export interface Streamable <T> {
    // Array de elementos genéricos.
    collection: T [];
    /**
     * Método de búsqueda mediante criterios y valores.
     * @param criteria Criterio de búsqueda (filtros).
     * @param value Valores a buscar.
     */
    searchElementInCollection(criteria: string[], value: string[]): T[];
    /**
     * Método genérico que añade un elemento a la colección.
     * @param element Elemento a añadir en la colleción.
     */
    addElement(element: T): T[];
    /**
     * Método genérico para eliminar un elemento de la colección.
     * @param element Elemento a eliminar.
     */
    deleteElement(element: T): T[];
}