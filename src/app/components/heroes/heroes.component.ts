import { Component, Input, OnInit, input } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from 'src/app/interfaces/heroes.interface';
import { Tab1Page } from 'src/app/pages/tab1/tab1.page';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent  implements OnInit {

  //@Inpit referencia la info de unosHeroes pasa a este componentes
  @Input() unosHeroes: Heroe[]=[];
  //TODO
  //SI QUIERE VER CAMBIOS, HAGALO MANUAL
  useCardView: boolean = false; // Si cambias aqui si cambia a modo carta ---

  constructor(private router:Router) {
  }

  ngOnInit() {
    return;
  }

  //ENCARGADO DE ENVIAR EL ID Y REDIRECCIONAR AL COMPONENTE SINGULAR
  navegarDetalleHeroe(unId:any){
    this.router.navigate(['/det-heroe',unId]);
  }

  navegarFotosHeroe(idHeroe: any){
    this.router.navigate(['/pagina-fotos', idHeroe]);
  }


}
