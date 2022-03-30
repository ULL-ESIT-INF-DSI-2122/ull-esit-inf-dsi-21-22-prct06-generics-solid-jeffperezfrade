/**
 * RandomNumber class.
 */
export class RandomNumber {
    /**
     * Atributo de la propia clase.
     */
    private static RandomNumber: RandomNumber;
    /**
     * Constructor privado de la clase RandomNumber.
     */
    private constructor(){}
    /**
     * Instanciamos la clase.
     * @returns Devuelve la instancia de la clase.
     */
    public static getRandomNumberInstance(): RandomNumber {
        if (!RandomNumber.RandomNumber)
            RandomNumber.RandomNumber = new RandomNumber();
        return RandomNumber.RandomNumber;
    }
    /**
     * Getter function.
     * @returns Devuelve un numero entre 0 y 1.
     */
    public getRandomZeroOne(): number {
        return Math.random();
    }
    /**
     * Getter function.
     * @param max numero maximo en el rango.
     * @param min numero minimo en el rango.
     * @returns Devuelve un numero aleatorio dentro del rango.
     */
    public getRandomInRange(max: number, min: number) {
        return Math.random() * (max - min) + min;
    }
    /**
     * Getter function.
     * @param max Numero maximo del rango.
     * @param min Numero minimo del rango.
     * @returns Devuelve un numero entero dentro del rango.
     */
    public getRandomIntegerInRange(max: number, min: number): number {
        let res = (Math.random() * (max - min) + min).toFixed(0);
        return Number(res);
    }
}