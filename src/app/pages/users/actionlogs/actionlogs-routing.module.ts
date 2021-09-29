import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActionlogsPage } from './actionlogs.page';

const routes: Routes = [
  {
    path: '',
    component: ActionlogsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActionlogsPageRoutingModule {}
