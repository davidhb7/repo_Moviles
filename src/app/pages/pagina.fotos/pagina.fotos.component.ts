import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FotosHeroe } from 'src/app/interfaces/fotos.heroe.interface';
import { Heroe } from 'src/app/interfaces/heroes.interface';
import { FotosHeroeService } from 'src/app/services/fotos-heroe.service';
import { HeroesServiceService } from 'src/app/services/heroes-service.service';


@Component({
  selector: 'app-pagina.fotos',
  templateUrl: './pagina.fotos.component.html',
  styleUrls: ['./pagina.fotos.component.scss'],
})
export class PaginaFotosComponent  implements OnInit {

  //@Inpit referencia la info de unosHeroes pasa a este componentes
  @Input() unHeroe!: Heroe;

  @Input() unasFotos: FotosHeroe[]=[];


  unIdHeroe: number;

  constructor(
    route:ActivatedRoute,
    data:HeroesServiceService,
    dataFotos:FotosHeroeService
  ) {
    this.unIdHeroe=route.snapshot.params["id"];
    this.unHeroe=data.getUnHeroe(this.unIdHeroe);
    this.unasFotos=dataFotos.getFotosHeroeId(this.unIdHeroe);
    console.log(this.unasFotos);



    console.log("Unas fotos:",this.unasFotos);

  }

  ngOnInit() {

    return;
  }
  // getImagesArray() {
  //   const fotosConIdCoincidente = this.unasFotos.find(fotosHeroe => fotosHeroe.id === this.unId);
  //   return fotosConIdCoincidente ? fotosConIdCoincidente.images : [];
  // }


  // getImagesArray(): string[] {
  //   const fotosConIdCoincidente = this.unasFotos.find(fotosHeroe => fotosHeroe.id === this.unId);
  //   return fotosConIdCoincidente ? fotosConIdCoincidente.images : [];

  // }
}
