import 'mocha';
import {expect} from 'chai';
import {StringSearchableCollection} from '../src/mod-clase/StringSearchableCollection';
import {NumericSearchableCollection} from '../src/mod-clase/NumericSearchableCollection';

describe(`Ejercicio clase tests`, () => {
    describe('StringSearchableCollection class tests', () => {
        describe(`getNumbersOfItems() function tests`, () => {
            const object = new StringSearchableCollection(['hola', 'que', 'tal', 'hola']);
            it('object.getNumberOfItems() should return 4', () => {
                expect(object.getNumberOfItems()).to.be.equal(4);
            });
        });
        describe(`addItem() function tests`, () => {
            const object = new StringSearchableCollection(['hola', 'que', 'tal', 'hola']);
            it('object.addItem(como) should return [hola, que, tal, hola, como]', () => {
                expect(object.addItem('como')).to.be.eql(['hola', 'que', 'tal', 'hola', 'como']);
            });
        });
        describe(`getItem() function tests`, () => {
            const object = new StringSearchableCollection(['hola', 'que', 'tal', 'hola']);
            it('object.getItem(1) should return que', () => {
                expect(object.getItem(1)).to.be.eql('que');
            });
        });
        describe(`removeItem() function tests`, () => {
            const object = new StringSearchableCollection(['hola', 'que', 'tal', 'hola', 'como']);
            it('object.removeItem(como) should return [hola, que, tal, hola]', () => {
                expect(object.removeItem('como')).to.be.eql(['hola', 'que', 'tal', 'hola']);
            });
        });
        describe(`search() function tests`, () => {
            const object = new StringSearchableCollection(['hola', 'que', 'tal', 'hola', 'como']);
            it('object.search(hola) should return [hola, hola]', () => {
                expect(object.search('hola')).to.be.eql(['hola', 'hola']);
            });
        });
    });
    describe('NumericSearchableCollection class tests', () => {
        describe(`getNumbersOfItems() function tests`, () => {
            const object = new NumericSearchableCollection([1, 2, 3, 5, 6]);
            it('object.getNumberOfItems() should return 5', () => {
                expect(object.getNumberOfItems()).to.be.equal(5);
            });
        });
        describe(`addItem() function tests`, () => {
            const object = new NumericSearchableCollection([1, 2, 3, 5, 6]);
            it('object.addItem(9) should return [1, 2, 3, 5, 6, 9]', () => {
                expect(object.addItem(9)).to.be.eql([1, 2, 3, 5, 6, 9]);
            });
        });
        describe(`getItem() function tests`, () => {
            const object = new NumericSearchableCollection([1, 2, 3, 5, 6]);
            it('object.getItem(2) should return 3', () => {
                expect(object.getItem(2)).to.be.eql(3);
            });
        });
        describe(`removeItem() function tests`, () => {
            const object = new NumericSearchableCollection([1, 2, 3, 5, 6, 9]);
            it('object.removeItem(9) should return [1, 2, 3, 5, 6]', () => {
                expect(object.removeItem(9)).to.be.eql([1, 2, 3, 5, 6]);
            });
        });
        describe(`search() function tests`, () => {
            const object = new NumericSearchableCollection([1, 2, 3, 5, 6, 2, 1]);
            it('object.search(2) should return [2, 2]', () => {
                expect(object.search(2)).to.be.eql([2, 2]);
            });
        });
    });
});