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
  constructor(public collection: detailsFilm[]) {super(collection);}
    /**
     * La función busca mediante un criterio de búsqueda y unos valores y devuelve una colección de ocurrencias.
     * @param criteria Criterios de búsqueda.
     * @param value Valores para la búsqueda.
     * @returns Devuelve una colección resultado de la búsqueda.
     */
    searchElementInCollection(value: string[], criteria: string[]): detailsFilm[] {
      const finalResult: detailsFilm[] = [];
      const tempArray: number[] = [];
      for (let i: number = 0; i < value.length; i++) {
        for (let j: number = 0; j < this.collection.length; j++) {
          for (let k: number = 0; k < criteria.length; k++) {
            // Vamos comparando los criterios y si coincide comparamos los valores.
            if (criteria[k] == 'title') {
              if (this.collection[j].title == value[i]) tempArray.push(j);
            }
            if (criteria[k] == 'duration') {
              if (String(this.collection[j].duration) == value[i]) tempArray.push(j);
            }
            if (criteria[k] == 'director') {
              if (this.collection[j].director == value[i]) tempArray.push(j);
            }
            if (criteria[k] == 'date') {
              if (this.collection[j].date == value[i]) tempArray.push(j);
            }
            if (criteria[k] == 'genre') {
              for (let z: number = 0; z < this.collection[j].genre.length; z++)
                if (this.collection[j].genre[z] == value[i]) tempArray.push(j);
            }
          }
        }
      }
      for (let index = tempArray.length - 1; index >= 0; index--)
        if (tempArray.indexOf(tempArray[index]) !== index) tempArray.splice(index, 1);

      while (tempArray.length > 0) {
        finalResult.push(this.collection[tempArray[0]]);
        tempArray.shift();
      }
      return finalResult;
    }
}
