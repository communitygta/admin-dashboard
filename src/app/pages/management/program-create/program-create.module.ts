import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgramCreatePageRoutingModule } from './program-create-routing.module';

import { ProgramCreatePage } from './program-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ProgramCreatePageRoutingModule
  ],
  declarations: [ProgramCreatePage]
})
export class ProgramCreatePageModule {}
