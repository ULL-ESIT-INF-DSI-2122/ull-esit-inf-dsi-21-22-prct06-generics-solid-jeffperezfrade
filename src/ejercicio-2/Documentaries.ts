import {BasicStreamableCollection} from "./BasicStreamableCollection";
export type detailsDocumentary = {
    title: string,
    director: string,
    date: string,
    duration: number
}

export class Documentaries extends BasicStreamableCollection <detailsDocumentary> {
    constructor(public collection: detailsDocumentary[]){
        super(collection);
    }
    searchElementInCollection(criteria: string[], value: string[]): detailsDocumentary[] {
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
        const result: detailsDocumentary[] = [];
        while (numbers.length > 0) {
          result.push(this.collection[numbers[0]]);
          numbers.shift();
        }
        return result;
      }
}