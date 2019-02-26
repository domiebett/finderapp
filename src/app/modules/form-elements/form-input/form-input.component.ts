import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { FormElementComponent } from '../form-element.component';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./../form-element.scss', './form-input.component.scss']
})
export class FormInputComponent extends FormElementComponent {
  @Input() type = 'text';
  @Input() minLength = 2;
  @Input() maxLength = 20;

  constructor() {
    super();
  }
}
