import {Fighter} from "./Fighter";
/**
 * Tipo de pokemons (solo cuatro para simplificar la efectividad de los ataques).
 */
export type pokemonType = 'electric' | 'water' | 'fire' | 'grass';
/**
 * Clase Pokemon, subclase de Fighter.
 */
export class Pokemon extends Fighter {
    /**
     * Constructor de la clase Pokemon.
     * @param name Nombre del luchador.
     * @param weight Peso del luchador.
     * @param height Altura del luchador.
     * @param attack Poder de ataque del luchador.
     * @param defense Poder de defensa del luchador.
     * @param speed Velocidad del luchador.
     * @param health Salud (vida) del luchador.
     * @param type Tipo de elemento que controla el pokemon.
     */
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
    /**
     * Método getter para obtener el tipo de pokemon.
     * @returns Devuelve el tipo del pokemon.
     */
    getType(): pokemonType {return this.type;}
}