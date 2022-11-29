import { Injectable } from '@angular/core';
import { InterDog } from './dogs'; //interface importada do arquivo ts
import { Observable, of } from 'rxjs';  //Importando o observable
import { HttpClient} from '@angular/common/http'; //importando para usar o HTTP

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  private dogsURL = 'https://dog.ceo/api/breeds/image/random';

  constructor(private http: HttpClient) { }

    //trazendo os valores de nossa interface com o observable que está no array por um injetavel. Com o observable estamos tornando nossa chamada assíncrona
    ObserDog(): Observable<InterDog> {
      return this.http.get<InterDog>(this.dogsURL);
  }
}
