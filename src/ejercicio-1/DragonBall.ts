import {Fighter} from './Fighter';
/**
 * Tipo de dato para las diferentes fases de los saiyajin.
 */
export type powerPhases = 'Super-Saiyajin-1' | 'Super-Saiyajin-2' | 'Super-Saiyajin-3';
/**
 * Clase DragonBall subclase de Fighter.
 */
export class DragonBall extends Fighter {
    /**
     * Constructor de la clase DragonBall.
     * @param name Nombre del luchador.
     * @param weight Peso del luchador.
     * @param height Altura del luchador.
     * @param attack Poder de ataque del luchador.
     * @param defense Poder de defensa del luchador.
     * @param speed Velocidad del luchador.
     * @param health Salud (vida) del luchador.
     * @param phases Transformación de los saiyajin.
     */
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
    /**
     * Método getter para obtener la fase en que se encuentra el saiyajin.
     * @returns Devuelve la fase en la que se encuentra el saiyajin.
     */
    getPower(): powerPhases {return this.phases;}
}