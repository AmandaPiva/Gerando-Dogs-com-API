import { Component, OnInit } from '@angular/core';
import { InterDog } from '../dogs';
import { DogsService } from '../dogs.service';  //exluimos a importação antiga e substituimos por esta que trás o nosso service

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

  dog ?: InterDog; //criando uma propriedade que pode ou não ser obrigatório que trás a nossa interface

  //Trazendo a função do botão e faz referência ao nosso serviço criado
  getDog(): void{
    this.DogsService.ObserDog()
      .subscribe(inter => this.dog = inter)
  }

  constructor(private DogsService: DogsService) { } //injetando no construtor o nosso serviço

  ngOnInit(): void {
    this.getDog(); //chamando a função
  }
}


