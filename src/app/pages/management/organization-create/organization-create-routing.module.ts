import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrganizationCreatePage } from './organization-create.page';

const routes: Routes = [
  {
    path: '',
    component: OrganizationCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrganizationCreatePageRoutingModule {}
