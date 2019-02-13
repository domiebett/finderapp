import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FormInputComponent } from './form-input/form-input.component';
import { FormSelectComponent } from './form-select/form-select.component';
import { FormTextareaComponent } from './form-textarea/form-textarea.component';
import { FormRadioComponent } from './form-radio/form-radio.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    FormInputComponent,
    FormSelectComponent,
    FormTextareaComponent,
    FormRadioComponent
  ],
  exports: [
    FormInputComponent,
    FormSelectComponent,
    FormTextareaComponent,
    FormRadioComponent
  ]
})
export class FormElementsModule { }
