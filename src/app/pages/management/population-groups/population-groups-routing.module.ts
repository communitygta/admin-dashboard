import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopulationGroupsPage } from './population-groups.page';

const routes: Routes = [
  {
    path: '',
    component: PopulationGroupsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopulationGroupsPageRoutingModule {}
