import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolicyRoutingModule } from './policy-routing.module';
import { PolicyComponent } from './policy.component';
import { CKEditorModule } from 'ngx-ckeditor';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PolicyRoutingModule,
    CKEditorModule,
	FormsModule
  ],
  declarations: [PolicyComponent]
})
export class PolicyModule { }
