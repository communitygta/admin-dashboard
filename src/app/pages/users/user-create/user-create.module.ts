import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserCreatePageRoutingModule } from './user-create-routing.module';

import { UserCreatePage } from './user-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UserCreatePageRoutingModule
  ],
  declarations: [UserCreatePage]
})
export class UserCreatePageModule {}
