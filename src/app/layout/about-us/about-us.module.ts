import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';
import { CKEditorModule } from 'ngx-ckeditor';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    CKEditorModule,
	FormsModule
  ],
  declarations: [AboutUsComponent]
})
export class AboutUsModule { }
