import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CustomerComponent } from './customer/customer.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [CustomerComponent, UserComponent, AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
