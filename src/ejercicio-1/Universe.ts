import {Fighter} from "./Fighter";
/**
 * Clase Universe, contiene la colección de los luchadores de diferentes tipos. 
 */
export class Universe {
    /**
     * Constructor 
     * @param characters Array de luchadores de todos tipos.
     */
    constructor(private characters: Fighter[]) {}
    /**
     * Método getter que devuelve el array de luchadores.
     * @returns Devuelve el array de luchadores.
     */
    getCharacters(): Fighter[] {return this.characters;}
}