import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FocusesPageRoutingModule } from './focuses-routing.module';

import { FocusesPage } from './focuses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FocusesPageRoutingModule
  ],
  declarations: [FocusesPage]
})
export class FocusesPageModule {}
