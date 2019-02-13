import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { FormElementComponent } from '../form-element.component';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./../form-element.scss', './form-select.component.scss']
})
export class FormSelectComponent extends FormElementComponent {

  @Input() options: string[] = [];
  @Input() defaultOption = 'Select an option';

  constructor() {
    super();
  }
}
