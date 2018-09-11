import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {GaleriaComponent} from '../galeria/galeria-list/galeria.component';
import {DeportistaComponent} from '../deportista/deportista-list/deportista.component';

const routes: Routes = [
    
  {
      path: 'galerias',
      children: [
          {
              path: 'list',
              component: GaleriaComponent
          }
      ]
  },
  {
      path: 'deportistas',
      children: [
          {
              path: 'list',
              component: DeportistaComponent
          }
      ]
  }
];

@NgModule({
  imports: [
      CommonModule,
      RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
  
}
