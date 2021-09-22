import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrganizationCreatePageRoutingModule } from './organization-create-routing.module';

import { OrganizationCreatePage } from './organization-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrganizationCreatePageRoutingModule
  ],
  declarations: [OrganizationCreatePage]
})
export class OrganizationCreatePageModule {}
