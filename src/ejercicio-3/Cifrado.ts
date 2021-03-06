import {Alfabeto} from "./Alfabeto";
import {Clave} from "./Clave";
/**
 * Clase Cifrado donde se lleva a cabo la codificación y decodificación César.
 */
export class Cifrado {
    // Clave del cifrado pedida al usuario.
    private clave: Clave;
    private alfabeto: Alfabeto;
    // Mensaje de entrada pedido al usuario.
    private mensajeEntrada: string;
    /**
     * Constructor de la clase Cifrado.
     * @param clave Clave dada por el usuario para el cifrado.
     * @param mensajeEntrada Mensaje de entrada dada por el usuario a cifrar o descifrar.
     * @param alfabeto Alfabeto que se usará para el cifrado.
     */
    constructor(clave: string, mensajeEntrada: string, alfabeto: string) {
        this.clave = new Clave(clave);
        this.mensajeEntrada = mensajeEntrada;
        this.alfabeto = new Alfabeto(alfabeto);
    }
    /**
     * La función codifica el mensaje de entrada teniendo en cuenta la clave y el alfabeto de la clase.
     * @returns Devuelve el mensaje codificado.
     */
    public encode(): string {
        let finalString: string = '';
        let fullClave: string = this.clave.getClave();
        if(this.mensajeEntrada.length > this.clave.getClaveLength()) {
            let repetir: number = Math.floor(this.mensajeEntrada.length / this.clave.getClaveLength());
            let claveAmpliada: string = this.clave.getClave().repeat(repetir);
            let resto: number = this.mensajeEntrada.length - claveAmpliada.length;
            for(let index: number = 0; index < resto; index++)
                claveAmpliada += this.clave.getCharAt(index);
            fullClave = claveAmpliada;
        }
        for(let index: number = 0; index < this.mensajeEntrada.length; index++) {
            let d: number = this.alfabeto.getIndexOf(fullClave[index]) + 1;
            if(this.alfabeto.getIndexOf(this.mensajeEntrada[index]) != -1){
                let pos: number = (this.alfabeto.getIndexOf(this.mensajeEntrada[index]) + d) % this.alfabeto.getLength();
                finalString += this.alfabeto.getCharAt(pos);
            } else finalString += this.mensajeEntrada[index];
        }
        return finalString;
    }
    /**
     * La función decodificar el mensaje cifrado que el usuario ha introducido usando la clave tambien introducida.
     * @returns Devuelve el mensaje decodificado (mensaje original).
     */
    public decode(): string {
        let finalString: string = '';
        let fullClave: string = this.clave.getClave();
        if(this.mensajeEntrada.length > this.clave.getClaveLength()) {
            let repetir: number = Math.floor(this.mensajeEntrada.length / this.clave.getClaveLength());
            let claveAmpliada: string = this.clave.getClave().repeat(repetir);
            let resto: number = this.mensajeEntrada.length - claveAmpliada.length;
            for(let index: number = 0; index < resto; index++)
                claveAmpliada += this.clave.getCharAt(index);
            fullClave = claveAmpliada;
        }
        for(let index: number = 0; index < this.mensajeEntrada.length; index++) {
            let d: number = this.alfabeto.getIndexOf(fullClave[index]) + 1;
            if(this.alfabeto.getIndexOf(this.mensajeEntrada[index]) != -1 && this.alfabeto.getIndexOf(this.mensajeEntrada[index]) >= d){
                let pos: number = (this.alfabeto.getIndexOf(this.mensajeEntrada[index]) - d) % this.alfabeto.getLength();
                finalString += this.alfabeto.getCharAt(pos);
            } else if(this.alfabeto.getIndexOf(this.mensajeEntrada[index]) != -1 && this.alfabeto.getIndexOf(this.mensajeEntrada[index]) < d) {
                finalString += this.alfabeto.getCharAt(this.alfabeto.getLength() + (this.alfabeto.getIndexOf(this.mensajeEntrada[index]) - d));
            } else finalString += this.mensajeEntrada[index];
        }
        return finalString;
    }
}

