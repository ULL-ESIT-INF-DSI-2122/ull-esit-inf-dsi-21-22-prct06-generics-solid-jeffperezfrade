import 'mocha';
import {expect} from 'chai';
import {Alfabeto} from '../src/ejercicio-3/Alfabeto';
import {Cifrado} from '../src/ejercicio-3/Cifrado';
import {Clave} from '../src/ejercicio-3/Clave';

describe('Ejercicio 3 - El cifrado indescifrable tests', () => {
    describe('Class Alfabeto tests', () => {
        describe('getLength() method tests', () => {
            const alfabeto = new Alfabeto('ABCDEFGHIJKLMNÑOPQRSTUVWXYZ');
            it('alfabeto.getLength() should return 27', () => {
                expect(alfabeto.getLength()).to.be.equal(27);
            })
        })

        describe('getAlfabeto() method tests', () => {
            const alfabeto = new Alfabeto('ABCDEFGHIJKLMNÑOPQRSTUVWXYZ');
            it('alfabeto.getAlfabeto() should return the alphabet separated', () => {
                expect(alfabeto.getAlfabeto()).to.be.eql([
                    'A', 'B', 'C', 'D', 'E', 'F',
                    'G', 'H', 'I', 'J', 'K', 'L',
                    'M', 'N', 'Ñ', 'O', 'P', 'Q',
                    'R', 'S', 'T', 'U', 'V', 'W',
                    'X', 'Y', 'Z'
                  ]
                  );
            })
        })

        describe('getIndexOf() method tests', () => {
            const alfabeto = new Alfabeto('ABCDEFGHIJKLMNÑOPQRSTUVWXYZ');
            it('alfabeto.getIndexOf(F) should return 5', () => {
                expect(alfabeto.getIndexOf('F')).to.be.equal(5);
            })
        })

        describe('getCharAt() method tests', () => {
            const alfabeto = new Alfabeto('ABCDEFGHIJKLMNÑOPQRSTUVWXYZ');
            it('alfabeto.getCharAt(9) should return J', () => {
                expect(alfabeto.getCharAt(9)).to.be.equal('J');
            })
        })
    })

    describe('Class Clave tests', () => {
        describe('getClave() method tests', () => {
            const clave = new Clave('PRUEBA');
            it('clave.getClave() should return PRUEBA', () => {
                expect(clave.getClave()).to.be.equal('PRUEBA');
            })
        })

        describe('getClaveLength() method tests', () => {
            const clave = new Clave('PRUEBA');
            it('clave.getClaveLength() should return 6', () => {
                expect(clave.getClaveLength()).to.be.equal(6);
            })
        })

        describe('getCharAt() method tests', () => {
            const clave = new Clave('PRUEBA');
            it('clave.getCharAt(3) should return E', () => {
                expect(clave.getCharAt(3)).to.be.equal('E');
            })
        })
    })

    describe('Class Cifrado tests', () => {
        describe('enconde() tests', () => {
            const alfabeto: string = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
            const cifradoCesar = new Cifrado('clave', 'holaestoesunaprueba', alfabeto);
            it('cifradoCesar.encode() should return KAMWJVFPAXXYBMWXPCW', () => {
                expect(cifradoCesar.encode()).to.be.equal('KAMWJVFPAXXYBMWXPCW')
            })
        })

        describe('enconde() tests', () => {
            const alfabeto: string = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
            const cifradoCesar = new Cifrado('clave', 'hola, como estas', alfabeto);
            it('cifradoCesar.encode() should return KAMW, ÑPIT PTPFV', () => {
                expect(cifradoCesar.encode()).to.be.equal('KAMW, ÑPIT PTPFV')
            })
        })

        describe('decode() tests', () => {
            const alfabeto: string = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
            const cifradoCesar = new Cifrado('clave', 'KAMWJVFPAXXYBMWXPCW', alfabeto);
            it('cifradoCesar.decode() should return HOLAESTOESUNAPRUEBA', () => {
                expect(cifradoCesar.decode()).to.be.equal('HOLAESTOESUNAPRUEBA')
            })
        })

        describe('decode() tests', () => {
            const alfabeto: string = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
            const cifradoCesar = new Cifrado('clave', 'KAMW, ÑPIT PTPFV', alfabeto);
            it('cifradoCesar.decode() should return HOLA, COMO ESTAS', () => {
                expect(cifradoCesar.decode()).to.be.equal('HOLA, COMO ESTAS')
            })
        })
    })
})