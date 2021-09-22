import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrganizationEditPageRoutingModule } from './organization-edit-routing.module';

import { OrganizationEditPage } from './organization-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    OrganizationEditPageRoutingModule
  ],
  declarations: [OrganizationEditPage]
})
export class OrganizationEditPageModule {}
