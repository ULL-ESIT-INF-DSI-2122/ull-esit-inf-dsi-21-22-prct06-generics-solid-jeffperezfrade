import {DC} from "./DC";
import {DragonBall} from "./DragonBall";
import {Fighter} from "./Fighter";
import {Marvel} from "./Marvel";
import {Pokemon} from "./Pokemon";
import {StarWars} from "./StarWars";
import {Universe} from "./Universe";


export class Combat {
    constructor(private fighter1: Fighter, private fighter2: Fighter){}

    private damageCaused(opponent1: Fighter, opponent2: Fighter) {
        if (opponent1 instanceof Pokemon && opponent2 instanceof Pokemon) {
          if ((opponent1.getType() === 'fire' && opponent2.getType() === 'grass') || ((opponent1.getType() === 'water' && opponent2.getType() === 'fire') ||
        ((opponent1.getType() === 'grass' || opponent1.getType() === 'electric') && opponent2.getType() === 'water'))) {
            return (50 * (opponent1.getAttack()/opponent2.getDefense()) * 2);
          }
          if (((opponent1.getType() === 'grass' || opponent1.getType() === 'fire') && opponent2.getType() === 'electric') ||
        (opponent1.getType() === 'electric' && (opponent2.getType() === 'grass' || opponent2.getType() === 'fire'))) {
            return (50 * (opponent1.getAttack()/opponent2.getDefense()) * 1);
          }
          return (50 * (opponent1.getAttack()/opponent2.getDefense()) * 0.5);
        }

        if ((opponent1 instanceof DragonBall) || (opponent1 instanceof DC && ((opponent2 instanceof StarWars) || (opponent2 instanceof Pokemon))) || 
        (opponent1 instanceof Marvel && ((opponent2 instanceof StarWars) || (opponent2 instanceof Pokemon))) || 
        (opponent1 instanceof StarWars && opponent2 instanceof Pokemon)) {
          return (50 * (opponent1.getAttack()/opponent2.getDefense())* 2);
        }
        if ((opponent1 instanceof DC && opponent2 instanceof Marvel) || (opponent1 instanceof Marvel && opponent2 instanceof DC)) {
          return (50 * (opponent1.getAttack()/opponent2.getDefense()) * 1);
        }
        return (50 * (opponent1.getAttack()/opponent2.getDefense()) * 0.5);
    }
    start(): string {
        let hp1: number = this.fighter1.getHealth();
        let hp2: number = this.fighter2.getHealth();
        console.log('The combat begins!\n\n');
        console.log(`The opponent 1 is ${this.fighter1.getName()} and has ${this.fighter1.getHealth()} HP\n\n`);
        console.log(`The opponent 2 is ${this.fighter2.getName()} and has ${this.fighter2.getHealth()} HP\n\n`);
        while (hp1 > 0) {
          hp2 = hp2 - this.damageCaused(this.fighter1, this.fighter2);
          console.log(this.fighter1.getCatchingPhrase() + `\n`);
          console.log(`Attack of ${this.fighter1.getName()} >> ${this.fighter2.getName()} has ${hp2} HP\n\n`);
          if (hp2 <= 0) {
            console.log(`The combat is over and the winning opponent is: ${this.fighter1.getName()}`);
            return (`The combat is over and the winning opponent is: ${this.fighter1.getName()}`);
          }
          hp1 = hp1 - this.damageCaused(this.fighter2, this.fighter1);
          console.log(this.fighter2.getCatchingPhrase() + `\n`);
          console.log(`Attack of ${this.fighter2.getName()} >> ${this.fighter1.getName()} has ${hp1} HP\n\n`);
        }
        console.log(`The combat is over and the winning opponent is: ${this.fighter2.getName()}`);
        return (`The combat is over and the winning opponent is: ${this.fighter2.getName()}`);
      }
}