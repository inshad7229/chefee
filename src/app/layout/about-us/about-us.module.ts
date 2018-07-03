import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';
import { CKEditorModule } from 'ngx-ckeditor';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {AdminService} from '../../shared/services/admin/admin.service'
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    CKEditorModule,
	ToastrModule.forRoot(),
	FormsModule
  ],
  providers:[AdminService],
  declarations: [AboutUsComponent]
})
export class AboutUsModule { }
