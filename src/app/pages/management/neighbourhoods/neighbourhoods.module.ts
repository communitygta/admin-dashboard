import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NeighbourhoodsPageRoutingModule } from './neighbourhoods-routing.module';

import { NeighbourhoodsPage } from './neighbourhoods.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NeighbourhoodsPageRoutingModule
  ],
  declarations: [NeighbourhoodsPage]
})
export class NeighbourhoodsPageModule {}
