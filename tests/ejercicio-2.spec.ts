import 'mocha';
import {expect} from 'chai';
import {detailsFilm, Films} from '../src/ejercicio-2/Films';
import {detailsSerie, Series} from '../src/ejercicio-2/Series';
import {detailsDocumentary, Documentaries} from '../src/ejercicio-2/Documentaries';

describe('Ejercicio 2 - DSIFlix tests', () => {
    describe('Class Documentaries tests', () => {
    const September11: detailsDocumentary = {title: 'Atentados 11 de Septiembre', director: 'Spike Lee', date: '2021', duration: 120};
    const SecondWorldWar: detailsDocumentary = { title: 'Second World War', director: 'Mathieu Kassovitz', date: '2011', duration: 200};
    const NorthKorea: detailsDocumentary = { title: 'North Korea', director: 'Ryan White', date: '2017', duration: 80 };
    const collectionOfDocumentaries = new Documentaries([September11, SecondWorldWar, NorthKorea]);
    
        describe('Check if object from Documentaries class exists', () => {
            it('collectionOfDocumentaries is not null (created correctly)', () => {
                expect(collectionOfDocumentaries).not.to.be.equal(null);
            })
        })

        describe('deleteElement() method tests', () => {
            it('collectionOfDocumentaries.deleteElement(SecondWorldWar) should return [September11, NorthKorea]', () => {
                expect(collectionOfDocumentaries.deleteElement(SecondWorldWar)).to.be.eql([September11, NorthKorea]);
            })
        })

        describe('addElement() method tests', () => {
            it('collectionOfDocumentaries.addElement(SecondWorldWar) should return [September11, NorthKorea, SecondWorldWar]', () => {
                expect(collectionOfDocumentaries.addElement(SecondWorldWar)).to.be.eql([September11, NorthKorea, SecondWorldWar]);
            })
        })

        describe('searchElement() method tests', () => {
            it('collectionOfDocumentaries.searchElementInCollection([\'2021\', \'Spike Lee\'], [\'date\', \'director\']) should return [Atentados 11 de Septiembre]',() => {
                expect(collectionOfDocumentaries.searchElementInCollection(['2021', 'Spike Lee'], ['date', 'director'])).to.be.eql([
                    {
                      title: 'Atentados 11 de Septiembre',
                      director: 'Spike Lee',
                      date: '2021',
                      duration: 120
                    }
                  ]
                );
            })
        })

        describe('searchElement() method tests', () => {
            it('collectionOfDocumentaries.searchElementInCollection([\'North Korea\', \'80\'], [\'title\', \'duration\']) should return [North Korea]',() => {
                expect(collectionOfDocumentaries.searchElementInCollection(['North Korea', '80'], ['title', 'duration'])).to.be.eql([
                    {
                      title: 'North Korea',
                      director: 'Ryan White',
                      date: '2017',
                      duration: 80
                    }
                  ]                
                );
            })
        })
    })

    describe('Class Series tests', () => {
        const TheOffice: detailsSerie = {title: 'The Office', director: 'Randall Einhorn', date: '2005', duration: 500, seasons: 9, chapters: 201, genre: ['comedia', 'familiar']}
        const TheWalkingDead: detailsSerie = {title: 'The Walking Dead', director: 'Greg Nicotero', date: '2010', duration: 460, seasons: 11, chapters: 166, genre: ['accion', 'zombies']}
        const collectionOfSeries = new Series([TheOffice, TheWalkingDead]);
        
        describe('Check if object from Series class exists', () => {
            it('collectionOfSeries is not null (created correctly)', () => {
                expect(collectionOfSeries).not.to.be.equal(null);
            })
        })

        describe('deleteElement() method tests', () => {
            it('collectionOfSeries.deleteElement(TheOffice) should return [TheWalkingDead]', () => {
                expect(collectionOfSeries.deleteElement(TheOffice)).to.be.eql([TheWalkingDead]);
            })
        })

        describe('addElement() method tests', () => {
            it('collectionOfSeries.addElement(TheOffice) should return [TheWalkingDead, TheOffice]', () => {
                expect(collectionOfSeries.addElement(TheOffice)).to.be.eql([TheWalkingDead, TheOffice]);
            })
        })

        describe('searchElement() method tests', () => {
            it('collectionOfSeries.searchElementInCollection([\'2010\', \'Greg Nicotero\', 460], [\'date\', \'director\', \'duration\']) should return [The Walking Dead]',() => {
                expect(collectionOfSeries.searchElementInCollection(['2010', 'Greg Nicotero', '460'], ['date', 'director', 'duration'])).to.be.eql([
                    {
                      title: 'The Walking Dead',
                      director: 'Greg Nicotero',
                      date: '2010',
                      duration: 460,
                      seasons: 11,
                      chapters: 166,
                      genre: [ 'accion', 'zombies' ]
                    }
                  ]                  
                );
            })
        })

        describe('searchElement() method tests', () => {
            it('collectionOfSeries.searchElementInCollection([\'TheOffice\', \'9\', 201], [\'title\', \'seasons\', \'chapters\']) should return [The Office]',() => {
                expect(collectionOfSeries.searchElementInCollection(['TheOffice', '9', '201'], ['title', 'seasons', 'chapters'])).to.be.eql([
                    {
                      title: 'The Office',
                      director: 'Randall Einhorn',
                      date: '2005',
                      duration: 500,
                      seasons: 9,
                      chapters: 201,
                      genre: [ 'comedia', 'familiar' ]
                    }
                  ]                  
                );
            })
        })

        describe('searchElement() method tests', () => {
            it('collectionOfSeries.searchElementInCollection([[]], [\'genre\']) should return [Atentados 11 de Septiembre]',() => {
                expect(collectionOfSeries.searchElementInCollection(['accion', 'zombies'], ['genre'])).to.be.eql([
                    {
                      title: 'The Walking Dead',
                      director: 'Greg Nicotero',
                      date: '2010',
                      duration: 460,
                      seasons: 11,
                      chapters: 166,
                      genre: [ 'accion', 'zombies' ]
                    }
                  ]        
                );
            })
        })
    })

    describe('Class Films tests', () => {
        const DontLookUp: detailsFilm = {title: 'Dont Look Up', director: 'Adam McKay', date: '2021', duration: 120, genre: ['comedia', 'actualidad']}
        const Dunkirk: detailsFilm = {title: 'Dunkirk', director: 'Christopher Nolan', date: '2017', duration: 80, genre: ['accion', 'guerra']}
        const collectionOfFilms = new Films([DontLookUp, Dunkirk]);

        describe('Check if object from Films class exists', () => {
            it('collectionOfFilms is not null (created correctly)', () => {
                expect(collectionOfFilms).not.to.be.equal(null);
            })
        })

        describe('deleteElement() method tests', () => {
            it('collectionOfFilms.deleteElement(Dunkirk) should return [DontLookUp]', () => {
                expect(collectionOfFilms.deleteElement(Dunkirk)).to.be.eql([DontLookUp]);
            })
        })

        describe('addElement() method tests', () => {
            it('collectionOfFilms.addElement(Dunkirk) should return [DontLookUp, Dunkirk]', () => {
                expect(collectionOfFilms.addElement(Dunkirk)).to.be.eql([DontLookUp, Dunkirk]);
            })
        })

        describe('searchElement() method tests', () => {
            it('collectionOfFilms.searchElementInCollection([\'2017\', \'Christopher Nolan\', 80], [\'date\', \'director\', \'duration\']) should return [Dunkirk]',() => {
                expect(collectionOfFilms.searchElementInCollection(['2017', 'Christopher Nolan', '80'], ['date', 'director', 'duration'])).to.be.eql([
                    {
                      title: 'Dunkirk',
                      director: 'Christopher Nolan',
                      date: '2017',
                      duration: 80,
                      genre: ['accion', 'guerra']
                    }
                  ]                  
                );
            })
        })

        describe('searchElement() method tests', () => {
            it('collectionOfFilms.searchElementInCollection([\'Dont Look Up\', [\'comedia\', \'actualidad\']], [\'title\', \'genre\']) should return [DontLookUp]',() => {
                expect(collectionOfFilms.searchElementInCollection(['Dont Look Up', 'comedia'], ['title', 'genre'])).to.be.eql([
                    {
                      title: 'Dont Look Up',
                      director: 'Adam McKay',
                      date: '2021',
                      duration: 120,
                      genre: ['comedia', 'actualidad']
                    }
                  ]                  
                );
            })
        })
    })
})