import 'mocha';
import {expect} from 'chai';
import {StarWars} from '../src/ejercicio-1/StarWars';
import {DragonBall} from '../src/ejercicio-1/DragonBall';
import {DC} from '../src/ejercicio-1/DC';
import {Marvel} from '../src/ejercicio-1/Marvel';
import {Pokemon} from '../src/ejercicio-1/Pokemon';
import {Combat} from '../src/ejercicio-1/Combat';
import {Universe} from '../src/ejercicio-1/Universe';

describe('Ejercicio 1 - El combate definitivo tests', () => {
    const darthVader = new StarWars('Darth Vader', 120, 2, 155, 35, 90, 250, 'Dark Power');
    const ironMan = new Marvel('Iron Man', 100, 1.75, 200, 50, 80, 500, 'Fly');
    const batman = new DC('Batman', 90, 1.95, 160, 45, 70, 300, 'Martial Arts');
    const pikachu = new Pokemon('Pikachu', 20, 10, 60, 40, 35, 200, 'electric');
    const vegeta = new DragonBall('Vegeta', 100, 1.90, 95, 80, 65, 350, 'Super-Saiyajin-1');
    // Universo que contiene una colección de luchadores de todos los tipos.
    const universe = new Universe([batman, ironMan, darthVader, pikachu, vegeta]);
    // Instancia de clase Combat para la pelea entre dos luchadores del universo.  
    const combat = new Combat(ironMan, darthVader);
    
    describe('Universe class tests', () => {
        it('universe object should exist (not null)', () => {
            expect(universe).not.to.be.equal(null);
        })

        it('universe.getCharacters() method should return all the fighters', () => {
            //console.log(universe.getCharacters());
            expect(universe.getCharacters()).to.be.eql([
            {
                  name: 'Batman',
                  weight: 90,
                  height: 1.95,
                  attack: 160,
                  defense: 45,
                  speed: 70,
                  health: 300,
                  superPower: 'Martial Arts'
                },
                {
                  name: 'Iron Man',
                  weight: 100,
                  height: 1.75,
                  attack: 200,
                  defense: 50,
                  speed: 80,
                  health: 500,
                  superPower: 'Fly'
                },
                {
                  name: 'Darth Vader',
                  weight: 120,
                  height: 2,
                  attack: 155,
                  defense: 35,
                  speed: 90,
                  health: 250,
                  superPower: 'Dark Power'
                },
                {
                  name: 'Pikachu',
                  weight: 20,
                  height: 10,
                  attack: 60,
                  defense: 40,
                  speed: 35,
                  health: 200,
                  type: 'electric'
                },
                {
                  name: 'Vegeta',
                  weight: 100,
                  height: 1.9,
                  attack: 95,
                  defense: 80,
                  speed: 65,
                  health: 350,
                  phases: 'Super-Saiyajin-1'
                }
              ]
              );
        })
    })

    describe('Fighter abstract class tests', () => {
        it('darthVader.getName() should return Darth Vader', () => {
            expect(darthVader.getName()).to.be.equal('Darth Vader');
        })

        it('pikachu.getHeight() should return 10', () => {
            expect(pikachu.getHeight()).to.be.equal(10);
        })

        it('vegeta.getWeight() should return 100', () => {
            expect(vegeta.getWeight()).to.be.equal(100);
        })

        it('batman.getAttack() should return 160', () => {
            expect(batman.getAttack()).to.be.equal(160);
        })

        it('ironMan.getDefense() should return 50', () => {
            expect(ironMan.getDefense()).to.be.equal(50);
        })

        it('darthVader.getSpeed() should return 90', () => {
            expect(darthVader.getSpeed()).to.be.equal(90);
        })

        it('pikachu.getHealth() should return 200', () => {
            expect(pikachu.getHealth()).to.be.equal(200);
        })
    })

    describe('DC class tests', () => {
        it('batman object from DC class should not be null', () => {
            expect(batman).not.be.equal(null);
        })

        it('batman.getSuperPower should return Martial Arts', () => {
            expect(batman.getSuperPower()).to.be.equal('Martial Arts');
        })
    })

    describe('StarWars class tests', () => {
        it('darthVader object should not be null', () => {
            expect(darthVader).not.to.be.equal(null);
        })

        it('darthVader.getSuperPower() should return Dark Power', () => {
            expect(darthVader.getSuperPower()).to.be.equal('Dark Power');
        })
    })

    describe('DragonBall class tests', () => {
        it('vegeta object should not be null', () => {
            expect(vegeta).not.to.be.equal(null);
        })

        it('vegeta.getPower() should return Super-Saiyajin-1', () => {
            expect(vegeta.getPower()).to.be.equal('Super-Saiyajin-1');
        })
    })

    describe('Marvel class tests', () => {
        it('ironMan object should not be null', () => {
            expect(ironMan).not.to.be.equal(null);
        })

        it('ironMan.getSuperPower() should return Fly', () => {
            expect(ironMan.getSuperPower()).to.be.equal('Fly');
        })
    })

    describe('Pokemon class tests', () => {
        it('pikachu object should not be null', () => {
            expect(pikachu).not.to.be.equal(null);
        })

        it('pikachu.getType() should return electric', () => {
            expect(pikachu.getType()).to.be.equal('electric');
        })
    })

    describe('Combat class test', () => {
        it('combat.startCombat() should return the result of the combat in a string', () => {
            expect(combat.startCombat()).to.be.equal('The fighter\'s 1 name is Iron Man, and has 500 HP\n\nThe fighter\'s 2 name is Darth Vader, and has 250 HP\n\nAttack from Iron Man to Darth Vader -> Darth Vader has -321.42857142857144 HP\n\nAttack from Darth Vader to Iron Man -> Iron Man has 422.5 HP\n\nThe winner is: Iron Man !!!');
        })
        const bulbasaur = new Pokemon('Bulbasaur', 20, 10, 60, 40, 35, 200, 'grass');
        const charmander = new Pokemon('Charmander', 25, 15, 70, 45, 30, 150, 'fire');
        const combat1 = new Combat(bulbasaur, charmander);
        it('combat1.startCombat() should return the narration of the combat in string', () => {
            expect(combat1.startCombat()).to.be.equal('The fighter\'s 1 name is Bulbasaur, and has 200 HP\n\nThe fighter\'s 2 name is Charmander, and has 150 HP\n\nAttack from Bulbasaur to Charmander -> Charmander has 16.666666666666686 HP\n\nAttack from Charmander to Bulbasaur -> Bulbasaur has 156.25 HP\n\nAttack from Bulbasaur to Charmander -> Charmander has -116.66666666666663 HP\n\nAttack from Charmander to Bulbasaur -> Bulbasaur has 112.5 HP\n\nThe winner is: Bulbasaur !!!');
        })
        const combat2 = new Combat(pikachu, bulbasaur);
        it('combat2.startCombat() should return the narration of the combat in string', () => {
            expect(combat2.startCombat()).to.be.equal('The fighter\'s 1 name is Pikachu, and has 200 HP\n\nThe fighter\'s 2 name is Bulbasaur, and has 200 HP\n\nAttack from Pikachu to Bulbasaur -> Bulbasaur has 125 HP\n\nAttack from Bulbasaur to Pikachu -> Pikachu has 125 HP\n\nAttack from Pikachu to Bulbasaur -> Bulbasaur has 50 HP\n\nAttack from Bulbasaur to Pikachu -> Pikachu has 50 HP\n\nAttack from Pikachu to Bulbasaur -> Bulbasaur has -25 HP\n\nAttack from Bulbasaur to Pikachu -> Pikachu has -25 HP\n\nThe winner is: Bulbasaur !!!');
        })
        const combat3 = new Combat(batman, ironMan);
        it('combat3.startCombat() should return the narration of the combat in string', () => {
            expect(combat3.startCombat()).to.be.equal('The fighter\'s 1 name is Batman, and has 300 HP\n\nThe fighter\'s 2 name is Iron Man, and has 500 HP\n\nAttack from Batman to Iron Man -> Iron Man has 340 HP\n\nAttack from Iron Man to Batman -> Batman has 77.77777777777777 HP\n\nAttack from Batman to Iron Man -> Iron Man has 180 HP\n\nAttack from Iron Man to Batman -> Batman has -144.44444444444446 HP\n\nThe winner is: Iron Man !!!');
        })
    })
})