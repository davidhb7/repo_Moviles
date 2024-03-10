import { Component, Input, OnInit, input } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from 'src/app/interfaces/heroes.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent  implements OnInit {

  //@Inpit referencia la info de unosHeroes pasa a este componentes
  @Input() unosHeroes: Heroe[]=[];

  constructor(private router:Router) { }

  ngOnInit() {
    return;
  }
  navegarDetalleHeroe(unId:any){
    this.router.navigate(['/det-heroe',unId]);
  }

  navegarFotosHeroe(idHeroe: any){
    this.router.navigate(['/pagina-fotos', idHeroe]);
  }


}
