import {RandomNumber} from "./RandomNumber";
/**
 * Clase RandomNumberSetCollection
 */
export class RandomNumberSetCollection {
    /**
     * Constructor.
     * @param set setde numeros aletaorios.
     */
    constructor(private set: Set<number>) {}
    public getSet(): Set<number> {
        return this.set;
    }
}
/**
 * Creamos un objeto de la clase Set.
 */
const set = new Set<number>();
// Añadimos numeros.
set.add(RandomNumber.getRandomNumberInstance().getRandomZeroOne());
set.add(RandomNumber.getRandomNumberInstance().getRandomInRange(2, 8));
set.add(RandomNumber.getRandomNumberInstance().getRandomIntegerInRange(3, 10));
/**
 * Craemos la instancia del objeto.
 */
const randCollection = new RandomNumberSetCollection(set);
console.log(randCollection.getSet());
