/**
 * Clase Alfabeto el cual se usará como referencia para el cifrado.
 */
export class Alfabeto {
    // Alfabeto almacenado en un array de caracteres.
    private alfabeto: string [];
    /**
     * Constructor de la clase Alfabeto.
     * @param alfabeto Cadena que contiene el alfabeto.
     */
    constructor(alfabeto: string){this.alfabeto = alfabeto.split('');}
    /**
     * Método getter para obtener la longitud de la cadena.
     * @returns Devuelve la longitud del alfabeto.
     */
    public getLength(): number {return this.alfabeto.length;}
    /**
     * Método getter para obtener el alfabeto completo.
     * @returns Devuelve el alfabeto en forma de array de string.
     */
    public getAlfabeto(): string [] {return this.alfabeto;}
    /**
     * El método devuelve el índice de un carácter pasado por parámetro.
     * @param char Carácter a buscar su índice.
     * @returns Devuelve el índice del carácter pasado por parámetro.
     */
    public getIndexOf(char: string): number {
        // Lo pasamos a mayúsculas siempre para así trabajar también con minúsculas.
        char = char.toUpperCase();
        return this.alfabeto.indexOf(char);
    }
    /**
     * El método devuelve el carácter que se encuentra en el índice pasado por parámetro.
     * @param index Indice del carácter a devolver.
     * @returns Devuelve el carácter que se encuentra en el indice pasado por parámetro.
     */
    public getCharAt(index: number): string {
        return this.alfabeto[index];
    }
}