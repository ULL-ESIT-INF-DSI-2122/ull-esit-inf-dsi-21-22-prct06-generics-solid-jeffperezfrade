
export class Alfabeto {
    private alfabeto: string [];

    constructor(alfabeto: string){
        this.alfabeto = alfabeto.split('');
    }

    public getLength(): number {return this.alfabeto.length;}

    public getAlfabeto(): string [] {return this.alfabeto;}

    public getIndexOf(char: string): number {
        // Lo pasamos a mayúsculas siempre para así trabajar también con minúsculas.
        char = char.toUpperCase();
        return this.alfabeto.indexOf(char);
    }

    public getCharAt(index: number): string {
        return this.alfabeto[index];
    }
}