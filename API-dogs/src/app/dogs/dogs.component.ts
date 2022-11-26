import { Component, OnInit } from '@angular/core';
import { InterDog } from '../dogs'; //interface importada do arquivo ts

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

  //criando um objeto para guardar a primeira info da interface
  DogObj: InterDog = {  //colocando a interface com os primeiros dados do primeiro cão
    id: 1,
    type: "Yorkshire",
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
