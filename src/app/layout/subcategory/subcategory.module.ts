import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubcategoryRoutingModule } from './subcategory-routing.module';
import { SubcategoryComponent } from './subcategory.component';
import { PageHeaderModule } from './../../shared';
import {AdminService} from '../../shared/services/admin/admin.service'
import { ToastrModule } from 'ngx-toastr';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SubcategoryRoutingModule,
    PageHeaderModule,
    ReactiveFormsModule,
	FormsModule,
	ToastrModule.forRoot(),
	MatDialogModule
  ],
  providers:[AdminService],
  declarations: [SubcategoryComponent]
})
export class SubcategoryModule { }
