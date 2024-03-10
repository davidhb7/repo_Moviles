import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaFotosComponent } from './pagina.fotos.component';

const routes: Routes = [
  {
    path:'',
    component: PaginaFotosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginaFotosRoutingModule { }
