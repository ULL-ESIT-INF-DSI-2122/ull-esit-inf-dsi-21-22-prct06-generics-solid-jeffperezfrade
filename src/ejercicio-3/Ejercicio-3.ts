import {Alfabeto} from "./Alfabeto";
import {Clave} from "./Clave";
import { Cifrado } from "./Cifrado";
// Paquete requerido para utilizar el prompt.
const {prompt} = require('enquirer');
const inquirer = require('inquirer');
// Alfabeto que se va a utilizar para el cifrado
const alfabeto: string = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
/**
 * Función asíncrona necesaria para utilizar el prompt con el paquete'enquirer'
 */
const start = async function() {
    console.log('\nBienvenido al programa del Cifrado César.');
    inquirer.prompt([
        {
            type: 'list',
            name: 'eleccion',
            message: '¿Que quieres hacer?:',
            choices: ['Codificar', 'Decodificar'],
        },
    ])
        .then(async (answers) => {
            if (answers.eleccion == "Codificar") {
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
            } else if (answers.eleccion == "Decodificar") {
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
            } else {
                console.log('\nOpción no válida.');
                return -1;
            }
        });
};
/**
 * Función que inicia el menú del ejercicio.
 */
start();