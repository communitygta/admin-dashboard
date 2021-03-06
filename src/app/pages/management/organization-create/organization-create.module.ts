import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrganizationCreatePageRoutingModule } from './organization-create-routing.module';

import { OrganizationCreatePage } from './organization-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    OrganizationCreatePageRoutingModule
  ],
  declarations: [OrganizationCreatePage]
})
export class OrganizationCreatePageModule {}
