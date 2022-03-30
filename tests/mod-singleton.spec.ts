import 'mocha';
import {expect} from 'chai';
import {RandomNumber} from '../src/mod-singleton/RandomNumber';
import {RandomNumberSetCollection} from '../src/mod-singleton/RandomNumberSetCollection';

describe('Mod clase tests', () => {
    describe('RandomNumber tests', () => {
        let rand = RandomNumber.getRandomNumberInstance().getRandomZeroOne();
        it('RandomNumber.getRandomNumberInstance().getRandomZeroOne() should create random number between 0 and 1', () => {
            expect(rand).to.be.greaterThan(0);
            expect(rand).to.be.lessThan(1);
        });
        let rand1 = RandomNumber.getRandomNumberInstance().getRandomInRange(2, 8);
        it('RandomNumber.getRandomNumberInstance().getRandomInRange() should create random number between 2 and 8', () => {
            expect(rand1).to.be.greaterThan(2);
            expect(rand1).to.be.lessThan(9);
        });
        let rand2 = RandomNumber.getRandomNumberInstance().getRandomIntegerInRange(3, 10);
        it('RandomNumber.getRandomNumberInstance().getRandomIntegerInRang() should create random number between 3 and 10', () => {
            expect(rand2).to.be.greaterThan(3);
            expect(rand2).to.be.lessThan(11);
        });
    });
    describe('RandomNumberSetCollection tests', () => {
    const set = new Set<number>();
    // Añadimos numeros.
    set.add(RandomNumber.getRandomNumberInstance().getRandomZeroOne());
    set.add(RandomNumber.getRandomNumberInstance().getRandomInRange(2, 8));
    set.add(RandomNumber.getRandomNumberInstance().getRandomIntegerInRange(3, 10));
    const randCollection = new RandomNumberSetCollection(set);
    console.log(randCollection.getSet());
    it('randCollection.getSet() returns the set', () => {
            expect(randCollection.getSet()).not.to.be.equal(null);
        });
    });
});