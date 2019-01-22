import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { FormElementComponent } from '../form-element.component';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./../form-element.scss', './form-input.component.scss']
})
export class FormInputComponent extends FormElementComponent {
  @Input() type: string = 'text';

  constructor() {
    super();
  }
}
