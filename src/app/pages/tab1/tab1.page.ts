import { Component } from '@angular/core';
import { Heroe } from 'src/app/interfaces/heroes.interface';
import { HeroesServiceService } from 'src/app/services/heroes-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  useCardView: boolean = false; // Variable para controlar la vista de tarjetas o lista normal
  unosHeroes: Heroe[]=[];

  //**************************************CONSTRUCTOR
  constructor(private data: HeroesServiceService) {
    this.unosHeroes=data.getHeroes();
    console.log("Lista Heroes", this.unosHeroes);
  }


  toggleListView() {
    this.useCardView = !this.useCardView; // Cambia el estado de la vista de tarjetas
    console.log("Estado es ", this.useCardView);
  }

}
 