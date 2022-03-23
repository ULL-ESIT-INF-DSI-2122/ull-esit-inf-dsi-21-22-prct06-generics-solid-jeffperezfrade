import {Fighter} from "./Fighter";

export type pokemonType = 'electric' | 'water' | 'fire' | 'grass';

export class Pokemon extends Fighter {
    constructor(
        protected name: string,
        protected weight: number,
        protected height: number,
        protected attack: number,
        protected defense: number,
        protected speed: number,
        protected health: number,
        protected type: pokemonType){
            super(name, weight, height, attack, defense, speed, health);
        }
    getType(): pokemonType {
        return this.type;
    }
}