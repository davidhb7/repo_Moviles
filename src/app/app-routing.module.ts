import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PaginaFotosPageModule } from './pages/pagina.fotos/pagina.fotos.module';
import { PaginaFotosComponent } from './pages/pagina.fotos/pagina.fotos.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'det-heroe/:id',
    loadChildren: () => import('./pages/det-heroe/det-heroe.module').then( m => m.DetHeroePageModule)
  },
  {
    path: 'pagina-fotos/:id',
    loadChildren:() => import('./pages/pagina.fotos/pagina.fotos.module').then( m => m.PaginaFotosPageModule)
  }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
