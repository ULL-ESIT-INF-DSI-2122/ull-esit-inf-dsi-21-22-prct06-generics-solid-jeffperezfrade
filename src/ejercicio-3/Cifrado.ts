import { Alfabeto } from "./Alfabeto";

export class Cifrado {
    private alfabeto: Alfabeto = new Alfabeto();
    private d: number;

    constructor(d: number) {
        this.d = d;
    }

    public encode(entryWord: string): string {
        const entrySplitted: string[] = entryWord.split('');
        const alphabetSize: number = this.alfabeto.getAlfabeto().length;
        let finalString: string = '';

        for(let index: number = 0; index < entrySplitted.length; index++){
            if(this.alfabeto.getIndexOf(entrySplitted[index]) != -1) {
                finalString += this.alfabeto.getCharAt((this.alfabeto.getIndexOf(entrySplitted[index]) + this.d) % alphabetSize)
            } else finalString += entrySplitted[index];
        }
        return finalString;
    }

    public decode(entryWord: string): string {
        const entrySplitted: string[] = entryWord.split('');
        const alphabetSize: number = this.alfabeto.getAlfabeto().length;
        let finalString: string = '';
        for(let index: number = 0; index < entrySplitted.length; index++){
            if(this.alfabeto.getIndexOf(entrySplitted[index]) != -1) {
                finalString += this.alfabeto.getCharAt((this.alfabeto.getIndexOf(entrySplitted[index]) - this.d) % alphabetSize);
            } else finalString += entrySplitted[index];
        }
        return finalString;
    }

}

const cifrado = new Cifrado(6);
//console.log(cifrado.encode('WIKIPEDIA, LA ENCICLOPEDIA LIBRE'));
console.log((8 - 6) % 27);
console.log(cifrado.decode('C'));