import {Fighter} from "./Fighter";
/**
 * Clase Marvel, subclase de Fighter.
 */
export class Marvel extends Fighter {
     /**
     * Constructor de la clase DragonBall.
     * @param name Nombre del luchador.
     * @param weight Peso del luchador.
     * @param height Altura del luchador.
     * @param attack Poder de ataque del luchador.
     * @param defense Poder de defensa del luchador.
     * @param speed Velocidad del luchador.
     * @param health Salud (vida) del luchador.
     * @param superPower Poder del luchador de Marvel.
     */
    constructor(
        protected name: string,
        protected weight: number,
        protected height: number,
        protected attack: number,
        protected defense: number,
        protected speed: number,
        protected health: number,
        protected superPower: string){
            super(name, weight, height, attack, defense, speed, health);
    }
    /**
     * Método getter para obtener el poder del luchador.
     * @returns Devuelve el poder del luchador.
     */
    getSuperPower(): string {return this.superPower;}
}