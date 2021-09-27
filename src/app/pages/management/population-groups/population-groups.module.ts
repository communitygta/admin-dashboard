import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopulationGroupsPageRoutingModule } from './population-groups-routing.module';

import { PopulationGroupsPage } from './population-groups.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopulationGroupsPageRoutingModule
  ],
  declarations: [PopulationGroupsPage]
})
export class PopulationGroupsPageModule {}
