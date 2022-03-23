import {BasicStreamableCollection} from "./BasicStreamableCollection";
/**
 * Tipo de dato para los detalles de la Series.
 */
export type detailsSerie = {
    title: string,
    director: string,
    date: string,
    duration: number
    seasons: number,
    chapters: number,
    genre: string[]
}
/**
 * Clase que se extienda de BasicStreamableCollection con el tipo de dato detailsSerie.
 */
export class Series extends BasicStreamableCollection <detailsSerie> {
  /**
   * Constructor de la clase Series.
   * @param collection Colección de Series.
   */  
  constructor(public collection: detailsSerie[]) {
        super(collection);
    }
    /**
     * La función busca mediante un criterio de búsqueda y unos valores y devuelve una colección de ocurrencias.
     * @param criteria Criterios de búsqueda.
     * @param value Valores para la búsqueda.
     * @returns Devuelve una colección resultado de la búsqueda.
    */
    searchElementInCollection(criteria: string[], value: string[]): detailsSerie[] {
        const numbers: number[] = [];
        for (let i: number = 0; i < value.length; i++) {
          for (let j: number = 0; j < this.collection.length; j++) {
            for (let t: number = 0; t < criteria.length; t++) {
              if (criteria[t] == 'title') {
                if (this.collection[j].title == value[i]) {
                    numbers.push(j);
                  }
              }
              if (criteria[t] == 'date') {
                if (this.collection[j].date == value[i]) {
                  numbers.push(j);
                }
              }
              if (criteria[t] == 'genre') {
                for (let z: number = 0; z < this.collection[j].genre.length; z++) {
                  if (this.collection[j].genre[z] == value[i]) {
                    numbers.push(j);
                  }
                }
              }
              if (criteria[t] == 'seasons') {
                  if (String(this.collection[j].seasons) == value[i]) {
                    numbers.push(j);
                  }
                }
            }
            }
          }
        for (let i = numbers.length -1; i >=0; i--) {
          if (numbers.indexOf(numbers[i]) !== i) numbers.splice(i, 1);
        }
        const result: detailsSerie[] = [];
        while (numbers.length > 0) {
          result.push(this.collection[numbers[0]]);
          numbers.shift();
        }
        return result;
    }
}