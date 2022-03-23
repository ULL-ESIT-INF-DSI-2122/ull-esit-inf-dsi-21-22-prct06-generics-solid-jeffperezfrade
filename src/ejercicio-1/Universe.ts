import {Fighter} from "./Fighter";

export class Universe {
    constructor(private characters: Fighter[]) {}
    getCharacters(): Fighter[] {return this.characters;}
}