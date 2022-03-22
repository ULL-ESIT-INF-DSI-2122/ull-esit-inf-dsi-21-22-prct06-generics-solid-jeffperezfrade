import {BasicStreamableCollection} from "./BasicStreamableCollection";

export type detailsFilm = {
    title: string,
    director: string,
    date: string,
    duration: number
    genre: string[]
}

export class Films extends BasicStreamableCollection<detailsFilm> {
    constructor(public collection: detailsFilm[]){
        super(collection);
    }

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
