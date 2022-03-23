import {Fighter} from './Fighter';

export type powerPhases = 'SuperSaiyan' | 'SuperSaiyan2' | 'SuperSaiyan3';

export class DragonBall extends Fighter {
    constructor(
        protected name: string,
        protected weight: number,
        protected height: number,
        protected attack: number,
        protected defense: number,
        protected speed: number,
        protected health: number,
        protected phases: powerPhases){
            super(name, weight, height, attack, defense, speed, health);
        }

    getPower(): powerPhases {return this.phases;}
}