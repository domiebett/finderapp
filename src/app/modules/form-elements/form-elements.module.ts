import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FormInputComponent } from './form-input/form-input.component';
import { FormSelectComponent } from './form-select/form-select.component';
import { FormTextareaComponent } from './form-textarea/form-textarea.component';
import { FormRadioComponent } from './form-radio/form-radio.component';
import { FormFilepickerComponent } from './form-filepicker/form-filepicker.component';

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
    FormRadioComponent,
    FormFilepickerComponent
  ],
  exports: [
    FormInputComponent,
    FormSelectComponent,
    FormTextareaComponent,
    FormRadioComponent,
    FormFilepickerComponent
  ]
})
export class FormElementsModule { }
