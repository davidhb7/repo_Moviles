import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from 'src/app/interfaces/heroes.interface';
import { HeroesServiceService } from 'src/app/services/heroes-service.service';

@Component({
  selector: 'app-det-heroe',
  templateUrl: './det-heroe.page.html',
  styleUrls: ['./det-heroe.page.scss'],
})
export class DetHeroePage implements OnInit {

  unId: number;
  unHeroe: Heroe;

  constructor(
    route:ActivatedRoute,
    data:HeroesServiceService,

    ) {
    this.unId=route.snapshot.params["id"];
    this.unHeroe=data.getUnHeroe(this.unId);

    console.log(this.unId);
    console.log(this.unHeroe);

  }

  ngOnInit() {
    return;
  }





}
