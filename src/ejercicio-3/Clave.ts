/**
 * Esta clase es la Clave que el usuario introduce para el cifrado.
 */
export class Clave {
    // Cadena con la palabra calve
    private clave: string;
    /**
     * Constructor de la clase Clave.
     * @param clave Clave introducida por el usuario.
     */
    constructor(clave: string) {
        this.clave = clave;
    }
    /**
     * Método getter que devuelve la clave integra.
     * @returns Devuelve la clave.
     */
    public getClave(): string {return this.clave;}
    /**
     * Método getter que devuelve la longitud de la clave.
     * @returns Retorna un número que indica la longitud de la clave introducida por el usuario.
     */
    public getClaveLength(): number {return this.clave.length;}
    /**
     * Método getter de una posición en concreto.
     * @param index Indice donde se quiere buscar.
     * @returns Devuelve el caracter que se encuentra en el índice pasado por parámetro.
     */
    public getCharAt(index: number): string {return this.clave[index];}
}