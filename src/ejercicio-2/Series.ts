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
  constructor(public collection: detailsSerie[]) {super(collection);}
    /**
     * La función busca mediante un criterio de búsqueda y unos valores y devuelve una colección de ocurrencias.
     * @param criteria Criterios de búsqueda.
     * @param value Valores para la búsqueda.
     * @returns Devuelve una colección resultado de la búsqueda.
    */
    searchElementInCollection(value: string[], criteria: string[]): detailsSerie[] {
      const finalResult: detailsSerie[] = [];
      const tempArray: number[] = [];
      for (let i: number = 0; i < value.length; i++) {
        for (let j: number = 0; j < this.collection.length; j++) {
          for (let k: number = 0; k < criteria.length; k++) {
            // Vamos comparando los criterios y si coincide comparamos los valores.
            if (criteria[k] == 'title') {
              if (this.collection[j].title == value[i]) tempArray.push(j);
            }
            if (criteria[k] == 'date') {
              if (this.collection[j].date == value[i]) tempArray.push(j);
            }
            if (criteria[k] == 'director') {
              if (this.collection[j].director == value[i]) tempArray.push(j);
            }
            if (criteria[k] == 'seasons') {
              if (String(this.collection[j].seasons) == value[i]) tempArray.push(j);
            }
            if (criteria[k] == 'genre') {
              for (let index: number = 0; index < this.collection[j].genre.length; index++)
                if (this.collection[j].genre[index] == value[i]) tempArray.push(j);
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