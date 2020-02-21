import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { ManagementSharedModule } from '../management-shared/management-shared.module';
import { StaffDetailComponent } from './staff-detail/staff-detail.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { StaffHomeComponent } from './staff-home/staff-home.component';

@NgModule({
  declarations: [StaffDetailComponent, StaffListComponent, StaffHomeComponent],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    ManagementSharedModule
  ]
})
export class ManagementModule { }
