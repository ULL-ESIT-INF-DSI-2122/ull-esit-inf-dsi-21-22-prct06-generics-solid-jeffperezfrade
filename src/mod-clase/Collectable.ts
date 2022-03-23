
export interface Collectable<T> {
    collection: T[];
    /**
     * Agrega un item a la collecion.
     * @param item Item a añadir.
     */
    addItem(item: T): T[];
    /**
     * Metodo getter.
     * @param index Indice del item a devolver.
     */
    getItem(index: number): T;
    /**
     * Elimina un item de la collecion.
     * @param item Item a eliminar.
     */
    removeItem(item: T): T[];
    /**
     * Devuelve el número de ocurrencias de un item.
     */
    getNumberOfItems(): number;
}