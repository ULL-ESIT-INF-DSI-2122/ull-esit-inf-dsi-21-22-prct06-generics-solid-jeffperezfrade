import {BasicStreamableCollection} from "./BasicStreamableCollection";
/**
 * Tipo de dato que contiene detalles de una película.
 */
export type detailsFilm = {
    title: string,
    director: string,
    date: string,
    duration: number
    genre: string[]
}
/**
 * Clase que se extiende de BasicStreamableCollection utilizando el tipo de dato detailsFilm
 */
export class Films extends BasicStreamableCollection <detailsFilm> {
  /**
   * Constructor de la clase Films.
   * @param collection Colección de películas (objetos con los detalles de las películas).
   */  
  constructor(public collection: detailsFilm[]){
        super(collection);
    }
    /**
     * La función busca mediante un criterio de búsqueda y unos valores y devuelve una colección de ocurrencias.
     * @param criteria Criterios de búsqueda.
     * @param value Valores para la búsqueda.
     * @returns Devuelve una colección resultado de la búsqueda.
     */
    searchElementInCollection(criteria: string[], value: string[]): detailsFilm[] {
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
                  if (criteria[t] == 'duration') {
                      if (String(this.collection[j].duration) == value[i]) {
                        numbers.push(j);
                      }
                    }
                }
                }
              }
            for (let i = numbers.length -1; i >=0; i--) {
              if (numbers.indexOf(numbers[i]) !== i) numbers.splice(i, 1);
            }
            const result: detailsFilm[] = [];
            while (numbers.length > 0) {
              result.push(this.collection[numbers[0]]);
              numbers.shift();
            }
            return result;
      }
}
