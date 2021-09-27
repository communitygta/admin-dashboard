import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NeighbourhoodsPage } from './neighbourhoods.page';

const routes: Routes = [
  {
    path: '',
    component: NeighbourhoodsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NeighbourhoodsPageRoutingModule {}
