import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaFotosRoutingModule } from './pagina.fotos-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PaginaFotosComponent } from './pagina.fotos.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    PaginaFotosComponent

  ],
  imports: [
    CommonModule,
    PaginaFotosRoutingModule,
    IonicModule,
    FormsModule,
    ComponentsModule
  ]
})
export class PaginaFotosPageModule { }
