/**
 * Clase abstracta Fighter.
 */
export abstract class Fighter {
    /**
     * Constructor de la clase abstracta Fighter.
     * @param name Nombre del luchador.
     * @param weight Peso del luchador.
     * @param height Altura del luchador.
     * @param attack Poder de ataque del luchador.
     * @param defense Poder de defensa del luchador.
     * @param speed Velocidad del luchador.
     * @param health Salud (vida) del luchador.
     */
    constructor(
        protected name: string,
        protected weight: number,
        protected height: number,
        protected attack: number,
        protected defense: number,
        protected speed: number,
        protected health: number){}

    /**
     * Función getter para obtener el nombre del pokemon.
     * @returns Devuelve el nombre del pokemon que invoca la función.
     */
     public getName(): string {return this.name;}
     /**
      * Función getter para obtener la altura del pokemon.
      * @returns Devuelve la altura del pokemon que invoca la función.
      */
     public getHeight(): number {return this.height;}
     /**
      * Función getter para obtener el peso del pokemon.
      * @returns Devuelve el peso del pokemon que invoca la función.
      */
     public getWeight(): number {return this.weight;}
         /**
      * Función getter para obtener el poder de ataque del pokemon.
      * @returns Devuelve el poder de ataque del pokemon que invoca la función.
      */
     public getAttack(): number {return this.attack;}
     /**
      * Función getter para obtener el poder de defensa del pokemon.
      * @returns Devuelve el poder de defensa del pokemon que invoca la función.
      */
     public getDefense(): number {return this.defense;}
     /**
      * Función getter para obtener la velocidad del pokemon.
      * @returns Devuelve la velocidad del pokemon que invoca la función.
      */
     public getSpeed(): number {return this.speed;}
     /**
      * Función getter para obtener la salud del pokemon.
      * @returns Devuelve la salud del pokemon que invoca la función.
      */
     public getHealth(): number {return this.health;}
}