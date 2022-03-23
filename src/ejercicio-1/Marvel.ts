import {Fighter} from "./Fighter";

export class Marvel extends Fighter {
    constructor(
        protected name: string,
        protected weight: number,
        protected height: number,
        protected attack: number,
        protected defense: number,
        protected speed: number,
        protected health: number,
        protected power: string){
            super(name, weight, height, attack, defense, speed, health);
        }
    getPower(): string {
        return this.power;
    }
}