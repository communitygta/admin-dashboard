import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgramCreatePage } from './program-create.page';

const routes: Routes = [
  {
    path: '',
    component: ProgramCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgramCreatePageRoutingModule {}
