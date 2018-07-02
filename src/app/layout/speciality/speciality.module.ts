import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecialityRoutingModule } from './speciality-routing.module';
import { SpecialityComponent } from './speciality.component';
import { PageHeaderModule } from './../../shared';
import {AdminService} from '../../shared/services/admin/admin.service'
import { ToastrModule } from 'ngx-toastr';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SpecialityRoutingModule,
    PageHeaderModule,
    ReactiveFormsModule,
	FormsModule,
	ToastrModule.forRoot(),
	MatDialogModule
  ],
  providers:[AdminService],
  declarations: [SpecialityComponent]
})
export class SpecialityModule { }
