
export class Alfabeto {
    private alfabeto: string [];

    constructor(){
        const letras: string = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
        this.alfabeto = letras.split('');
    }

    public getAlfabeto(): string [] {
        return this.alfabeto;
    }

    public getIndexOf(char: string): number {
        // Lo pasamos a mayúsculas siempre para así trabajar también con minúsculas.
        char = char.toUpperCase();
        return this.alfabeto.indexOf(char);
    }

    public getCharAt(index: number): string {
        return this.alfabeto[index];
    }
}