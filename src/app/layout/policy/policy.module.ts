import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolicyRoutingModule } from './policy-routing.module';
import { PolicyComponent } from './policy.component';
import { CKEditorModule } from 'ngx-ckeditor';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {AdminService} from '../../shared/services/admin/admin.service'
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  imports: [
    CommonModule,
	ToastrModule.forRoot(),
    PolicyRoutingModule,
    CKEditorModule,
	FormsModule
  ],
  providers:[AdminService],
  declarations: [PolicyComponent]
})
export class PolicyModule { }
