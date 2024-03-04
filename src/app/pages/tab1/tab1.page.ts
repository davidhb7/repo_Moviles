import { Component } from '@angular/core';
import { Heroe } from 'src/app/interfaces/heroes.interface';
import { HeroesServiceService } from 'src/app/services/heroes-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  visible: boolean =true;
  evento: any ={
    nombre:"Dia 1",
    lugar: "USB Cali",
    fecha: "18-02-2024"
  }

  unosHeroes: Heroe[]=[];

  //**************************************CONSTRUCTOR
  constructor(private data: HeroesServiceService) {
    this.unosHeroes=data.getHeroes();
    console.log("Lista Heroes", this.unosHeroes);
  }


  cambioEstado(){
    const nombre="David Herrera Bermúdez";
    let rango = "Cabo primero";

    this.visible= !this.visible;
    console.log(this.visible)
  }


}
