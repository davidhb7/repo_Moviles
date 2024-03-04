import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeroeComponent } from './heroe/heroe.component';
import { HeroesComponent } from './heroes/heroes.component';



@NgModule({

  declarations: [
    HeroeComponent,
    HeroesComponent
  ],
  exports:[
    HeroeComponent,
    HeroesComponent
  ],

  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
