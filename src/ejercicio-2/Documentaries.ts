import {BasicStreamableCollection} from "./BasicStreamableCollection";
/**
 * Tipo de dato que contiene los detalles de los documentales.
 */
export type detailsDocumentary = {
    title: string,
    director: string,
    date: string,
    duration: number
}
/**
 * Clase que se extiende de la clase abstracta genérica BasicStreamableCollection.
 * Utilizamos el tipo de dato creado anteriormente (detailsDocumentary).
 */
export class Documentaries extends BasicStreamableCollection <detailsDocumentary> {
    /**
     * Constructor de la clase Documentaries.
     * @param collection Colección de documentales.
     */
    constructor(public collection: detailsDocumentary[]) {super(collection);}
    /**
     * La función busca mediante un criterio de búsqueda y unos valores y devuelve una colección de ocurrencias.
     * @param criteria Criterios de búsqueda.
     * @param value Valores para la búsqueda.
     * @returns Devuelve una colección resultado de la búsqueda.
     */
    searchElementInCollection(value: string[], criteria: string[]): detailsDocumentary[] {
      const finalResult: detailsDocumentary[] = [];
      const tempArray: number[] = [];
      for (let i: number = 0; i < value.length; i++) {
        for (let j: number = 0; j < this.collection.length; j++) {
          for (let k: number = 0; k < criteria.length; k++) {
            // Vamos comparando los criterios y si coincide comparamos los valores.
            if (criteria[k] == 'date') {
              if (this.collection[j].date == value[i]) tempArray.push(j);
            }
            if (criteria[k] == 'title') {
              if (this.collection[j].title == value[i]) tempArray.push(j);
            }
            if (criteria[k] == 'director') {
              if (this.collection[j].director == value[i]) tempArray.push(j);
            }
            if (criteria[k] == 'duration') {
              if (String(this.collection[j].duration) == value[i]) tempArray.push(j);
            }
          }
        }
      }
      for (let index: number = tempArray.length - 1; index >= 0; index--)
        if (tempArray.indexOf(tempArray[index]) !== index) tempArray.splice(index, 1);

      
      while (tempArray.length > 0) {
        finalResult.push(this.collection[tempArray[0]]);
        tempArray.shift();
      }
      return finalResult;
    }
}

// const OJMadeinAmerica: detailsDocumentary = {title: 'O.J. MadeinAmerica', director: 'Ezra Edelman', date: '2016', duration: 448};
// const InsideJob: detailsDocumentary = {title: 'Inside Job', director: 'Charles Ferguson', date: '2010', duration: 105};
// const Home: detailsDocumentary = {title: 'Home', director: 'Yann Arthus-Bertrand', date: '2009', duration: 90};

// const docu = new Documentaries([OJMadeinAmerica, InsideJob, Home]);
// console.log(docu.searchElementInCollection(['Home', '90', '2009'], ['title', 'date']));