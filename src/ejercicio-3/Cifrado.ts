import {Alfabeto} from "./Alfabeto";
import {Clave} from "./Clave";
// Paquete requerido para utilizar el prompt.
const {prompt} = require('enquirer');
const inquirer = require('inquirer');

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
        for(let index: number = 0; index < this.mensajeEntrada.length; index++) {
            let d: number = this.alfabeto.getIndexOf(fullClave[index]) + 1;
            if(this.alfabeto.getIndexOf(this.mensajeEntrada[index]) != -1){
                let pos: number = (this.alfabeto.getIndexOf(this.mensajeEntrada[index]) + d) % this.alfabeto.getLength();
                finalString += this.alfabeto.getCharAt(pos);
            } else finalString += this.mensajeEntrada[index];
        }
        return finalString;
    }

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

const alfabeto: string = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';

const start = async function() {
    let stop: boolean = false;
    while(!stop){
        const res = inquirer.prompt([
            {
              type: 'list',
              name: 'eleccion',
              message: '¿Que quieres hacer?:',
              choices: ['Codificar', 'Decodificar', 'Salir'],
            },
          ])
          .then(async (answers) => {
            if(answers.eleccion == "Codificar"){
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
            console.log(`\nMensaje de entrada: ${response.mensajeEntrada}`);
            console.log(`Palabra clave: ${response.clave}`);
            console.log(`\nResultado del cifrado: ${cifradoCesar.encode()}`);
            } else if(answers.eleccion == "Decodificar") {
                const response = await prompt([
                    {
                        type: 'input',
                        name: 'mensajeEntrada',
                        message: 'Mensaje encriptado:',
                    },
                    {
                        type: 'input',
                        name: 'clave',
                        message: 'Palabra Clave:',
                    },
                ]);
                const cifradoCesar = new Cifrado(response.clave, response.mensajeEntrada, alfabeto);
                console.log(`\nEl cifrado se realizará con el alfabeto: ${alfabeto}`);
                console.log(`\nMensaje encriptado: ${response.mensajeEntrada}`);
                console.log(`Palabra clave: ${response.clave}`);
                console.log(`\nPalabra descifrada: ${cifradoCesar.decode()}`);
            } else if (answers.eleccion == "Salir") {
                stop = true;
                return 0;
            } else {
                console.log('\nOpción no válida.');
                return -1;
            }
          });
    }
};

start();
