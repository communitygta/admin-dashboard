import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgramEditPage } from './program-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ProgramEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgramEditPageRoutingModule {}
