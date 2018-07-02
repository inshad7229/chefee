import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { ChefListRoutingModule } from './chef-list-routing.module';
import { ChefListComponent,ChefListConfirmation } from './chef-list.component';
import { PageHeaderModule } from './../../shared';
import {AdminService} from '../../shared/services/admin/admin.service'
import { ToastrModule } from 'ngx-toastr';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  imports: [
    CommonModule,
    ChefListRoutingModule,
    PageHeaderModule,
    ReactiveFormsModule,
	FormsModule,
	ToastrModule.forRoot(),
	MatDialogModule
  ],
  providers:[AdminService],
  declarations: [ChefListComponent,ChefListConfirmation],
  entryComponents:[ChefListConfirmation],
})
export class ChefListModule { }
