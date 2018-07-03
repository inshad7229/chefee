import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsRoutingModule } from './terms-routing.module';
import { TermsComponent } from './terms.component';
import { CKEditorModule } from 'ngx-ckeditor';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {AdminService} from '../../shared/services/admin/admin.service'
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  imports: [
    CommonModule,
	ToastrModule.forRoot(),
    TermsRoutingModule,
    CKEditorModule,
FormsModule
  ],
  providers:[AdminService],
  declarations: [TermsComponent]
})
export class TermsModule { }
