import { Component, Input } from '@angular/core';

import { FormElementComponent } from '../form-element.component';
import { RadioOption } from '../../../_models/interfaces/radio';

@Component({
  selector: 'app-form-radio',
  templateUrl: './form-radio.component.html',
  styleUrls: ['./../form-element.scss', './form-radio.component.scss']
})
export class FormRadioComponent extends FormElementComponent {

  @Input() label = '';
  @Input() name = 'option';
  @Input() options: RadioOption[] = [];

  constructor() {
    super();
  }

}
