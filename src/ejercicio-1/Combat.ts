import {DC} from "./DC";
import {DragonBall} from "./DragonBall";
import {Fighter} from "./Fighter";
import {Marvel} from "./Marvel";
import {Pokemon} from "./Pokemon";
import {StarWars} from "./StarWars";
import {Universe} from "./Universe";
/**
 * Clase Combat donde se realizan los combates de los luchadores del Universo.
 */
export class Combat {
    /**
     * Constructor de la clase Combat.
     * @param fighter1 Primer luchador.
     * @param fighter2 Segundo luchador.
     */
    constructor(private fighter1: Fighter, private fighter2: Fighter){}
  /**
   * Función que calcula el daño de los ataques.
   * @param opponent1 Primer luchador que ataca primero.
   * @param opponent2 Segundo luchador que se defiende.
   * @returns Devuelve el daño causado.
   */
    private damage(opponent1: Fighter, opponent2: Fighter) {
      // Condicional para ver si los dos  
      if (opponent1 instanceof Pokemon && opponent2 instanceof Pokemon) {
          if ((opponent1.getType() === 'grass' && opponent2.getType() === 'fire') || ((opponent1.getType() === 'water' && opponent2.getType() === 'fire') || ((opponent1.getType() === 'grass' || opponent1.getType() === 'electric') && opponent2.getType() === 'water'))) 
            return (50 * (opponent1.getAttack() / opponent2.getDefense()) * 2);
          
            if (((opponent1.getType() === 'fire' || opponent1.getType() === 'grass') && opponent2.getType() === 'electric') || (opponent1.getType() === 'electric' && (opponent2.getType() === 'grass' || opponent2.getType() === 'fire'))) 
            return (50 * (opponent1.getAttack() / opponent2.getDefense()));
          
          return (50 * (opponent1.getAttack() / opponent2.getDefense()) * 0.5);
        }
        // Vamos comprobando las clases desde donde vienen los luchadores.
        if ((opponent1 instanceof DragonBall) || (opponent1 instanceof DC && ((opponent2 instanceof StarWars) || (opponent2 instanceof Pokemon))) || (opponent1 instanceof Marvel && ((opponent2 instanceof StarWars) || (opponent2 instanceof Pokemon))) || (opponent1 instanceof StarWars && opponent2 instanceof Pokemon)) 
          return (50 * (opponent1.getAttack() / opponent2.getDefense())* 2);
        
        if ((opponent1 instanceof DC && opponent2 instanceof Marvel) || (opponent1 instanceof Marvel && opponent2 instanceof DC)) 
          return (50 * (opponent1.getAttack() / opponent2.getDefense()));
        
        return (50 * (opponent1.getAttack() / opponent2.getDefense()) * 0.5);
    }
    /**
     * Función donde se realizan los combates entre los luchadores.
     * @returns Devuelve la narración del combate.
     */
    startCombat(): string {
      // Aquí se almacenará la narración del combate.
        let combatResult: string = '';
        // Almacenamos la salud de cada luchador.
        let fighter1Health: number = this.fighter1.getHealth();
        let fighter2Health: number = this.fighter2.getHealth();

        combatResult += `The fighter's 1 name is ${this.fighter1.getName()}, and has ${this.fighter1.getHealth()} HP\n\n`;
        combatResult += `The fighter's 2 name is ${this.fighter2.getName()}, and has ${this.fighter2.getHealth()} HP\n\n`
        while (fighter1Health > 0 && fighter2Health > 0) {
          fighter2Health = fighter2Health - this.damage(this.fighter1, this.fighter2);
          combatResult += `Attack from ${this.fighter1.getName()} to ${this.fighter2.getName()} -> ${this.fighter2.getName()} has ${fighter2Health} HP\n\n`;
          fighter1Health = fighter1Health - this.damage(this.fighter2, this.fighter1);
          combatResult += `Attack from ${this.fighter2.getName()} to ${this.fighter1.getName()} -> ${this.fighter1.getName()} has ${fighter1Health} HP\n\n`;
        }
        if(fighter1Health < 0) combatResult += `The winner is: ${this.fighter2.getName()} !!!`;
        else combatResult += `The winner is: ${this.fighter1.getName()} !!!`;
        
        return combatResult;
      }
}