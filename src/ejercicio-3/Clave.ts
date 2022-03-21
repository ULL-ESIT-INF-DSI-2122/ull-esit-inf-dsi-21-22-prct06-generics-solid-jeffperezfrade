export class Clave {
    private clave: string;

    constructor(clave: string) {
        this.clave = clave;
    }

    public getClave(): string {return this.clave;}
    public getClaveLength(): number {return this.clave.length;}
    public getCharAt(index: number): string {return this.clave[index];}
}