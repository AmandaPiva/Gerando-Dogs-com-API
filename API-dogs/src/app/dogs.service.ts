import { Injectable } from '@angular/core';
import { InterDog } from './dogs'; //interface importada do arquivo ts
import { DOGS } from './mock-dogs'; //Importando o mock do arquivo mock-dogs.ts
import { Observable, of } from 'rxjs';  //Importando o observable

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  //trazendo os valores de nossa interface com o observable que está no array por um injetavel. Com o observable estamos tornando nossa chamada assíncrona
  getDogs(): Observable<InterDog[]> {
    const dogs = of(DOGS);
    return dogs;
  }

  constructor() { }
}
