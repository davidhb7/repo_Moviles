import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from 'src/app/interfaces/heroes.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss'],
})
export class HeroeComponent  implements OnInit {

  //@Inpit referencia la info de unosHeroes pasa a este componentes
  @Input() unHeroe!: Heroe;

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
    return;
  }
  navegarFotosHeroe(idHeroe: any){
    this.router.navigate(['/pagina-fotos', idHeroe]);
  }

}
