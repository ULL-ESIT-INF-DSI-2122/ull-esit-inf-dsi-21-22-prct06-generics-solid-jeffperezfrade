
export interface Searchable<T> {
    collection: T[];

    search(item: T): T[];
}