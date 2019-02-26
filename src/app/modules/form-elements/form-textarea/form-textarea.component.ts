import { Component, OnInit, Input } from '@angular/core';
import { FormElementComponent } from '../form-element.component';

@Component({
  selector: 'app-form-textarea',
  templateUrl: './form-textarea.component.html',
  styleUrls: ['./../form-element.scss', './form-textarea.component.scss']
})
export class FormTextareaComponent extends FormElementComponent {

  @Input() minLength = 10;
  @Input() maxLength = 100;

  constructor() {
    super();
  }
}
