import { Alfabeto } from "./Alfabeto";
import { Clave } from "./Clave";
// Paquete requerido para utilizar el prompt.
const {prompt} = require('enquirer');

export class Cifrado {
    private clave: Clave;
    private alfabeto: Alfabeto;
    private mensajeEntrada: string;

    constructor(clave: string, mensajeEntrada: string, alfabeto: string) {
        this.clave = new Clave(clave);
        this.mensajeEntrada = mensajeEntrada;
        this.alfabeto = new Alfabeto(alfabeto);
    }

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

        


        return finalString;
    }

    // public decode(entryWord: string): string {hola
    //     const entrySplitted: string[] = entryWord.split('');
    //     const alphabetSize: number = this.alfabeto.getAlfabeto().length;
    //     let finalString: string = '';
    //     for(let index: number = 0; index < entrySplitted.length; index++){
    //         if(this.alfabeto.getIndexOf(entrySplitted[index]) != -1 && this.alfabeto.getIndexOf(entrySplitted[index]) >= this.d) {
    //             finalString += this.alfabeto.getCharAt((this.alfabeto.getIndexOf(entrySplitted[index]) - this.d) % alphabetSize);
    //         } else if(this.alfabeto.getIndexOf(entrySplitted[index]) != -1 && this.alfabeto.getIndexOf(entrySplitted[index]) < this.d) {
    //             finalString += this.alfabeto.getCharAt(alphabetSize + (this.alfabeto.getIndexOf(entrySplitted[index]) - this.d));
    //         } else finalString += entrySplitted[index];
    //     }        
    //     return finalString;
    // }
}

const alfabeto: string = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';

const start = async function() {
    console.log("\nBienvenido al programa de Cifrado César.");
    const response = await prompt([
        {
            type: 'input',
            name: 'mensajeEntrada',
            message: 'Mensaje de entrada:',
        },
        {
            type: 'input',
            name: 'clave',
            message: 'Palabra Clave:',
        },
    ]);
    const cifradoCesar = new Cifrado(response.clave, response.mensajeEntrada, alfabeto);
    console.log(`\nEl cifrado se realizará con el alfabeto: ${alfabeto}`);

    console.log(cifradoCesar.encode());

}

start();