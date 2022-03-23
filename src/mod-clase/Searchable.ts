
export interface Searchable<T> {
    collection: T[];
    /**
     * Metodo que devuelve el un array con el numero de ocurrencias del item dentro de la colleccion.
     * @param item Item a buscar de cualquier tipo.
     */
    search(item: T): T[];
}