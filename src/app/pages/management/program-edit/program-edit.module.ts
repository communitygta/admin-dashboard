import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgramEditPageRoutingModule } from './program-edit-routing.module';

import { ProgramEditPage } from './program-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ProgramEditPageRoutingModule
  ],
  declarations: [ProgramEditPage]
})
export class ProgramEditPageModule {}
