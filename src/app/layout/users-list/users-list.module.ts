import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { UsersListRoutingModule } from './users-list-routing.module';
import { UsersListComponent,UsersListConfirmation } from './users-list.component';
import { PageHeaderModule } from './../../shared';
import {AdminService} from '../../shared/services/admin/admin.service'
import { ToastrModule } from 'ngx-toastr';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  imports: [
    CommonModule,
    UsersListRoutingModule,
    PageHeaderModule,
    ReactiveFormsModule,
	FormsModule,
	ToastrModule.forRoot(),
	MatDialogModule
  ],
  providers:[AdminService],
  declarations: [UsersListComponent,UsersListConfirmation],
  entryComponents:[UsersListConfirmation],
})
export class UsersListModule { }
