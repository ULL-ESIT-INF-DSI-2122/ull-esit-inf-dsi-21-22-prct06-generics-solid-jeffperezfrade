
export interface Streamable <T> {
    collection: T [];

    searchElementInCollection(criteria: string[], value: string[]): T[];
    addElement(element: T): T[];
    deleteElement(element: T): T[];
}