import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrganizationEditPage } from './organization-edit.page';

const routes: Routes = [
  {
    path: '',
    component: OrganizationEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrganizationEditPageRoutingModule {}
