import { Component, OnInit } from '@angular/core';
import { InterDog } from '../dogs';
import { DogsService } from '../dogs.service';  //exluimos a importação antiga e substituimos por esta que trás o nosso service

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

  interface: InterDog[] = []; //simplificando e trazendo o nosso array que contém o mock de informações

  getDogs(): void{
    this.DogsService.getDogs()
      .subscribe(inter => this.interface = inter)
  }

  constructor(private DogsService: DogsService) { } //injetando no construtor o nosso serviço

  ngOnInit(): void {
    this.getDogs(); //chamando a função
  }
}
