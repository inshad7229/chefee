import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { DegreeRoutingModule } from './degree-routing.module';
import { DegreeComponent,DegreeConfirmation } from './degree.component';
import { PageHeaderModule } from './../../shared';
import {AdminService} from '../../shared/services/admin/admin.service'
import { ToastrModule } from 'ngx-toastr';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  imports: [
    CommonModule,
    DegreeRoutingModule,
    PageHeaderModule,
    ReactiveFormsModule,
	FormsModule,
	ToastrModule.forRoot(),
	MatDialogModule
  ],
  providers:[AdminService],
  declarations: [DegreeComponent,DegreeConfirmation],
  entryComponents:[DegreeConfirmation],
})
export class DegreeModule { }
