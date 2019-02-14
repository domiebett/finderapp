import { Component, Input } from '@angular/core';

import { FormElementComponent } from './../form-element.component';

@Component({
  selector: 'app-form-filepicker',
  templateUrl: './form-filepicker.component.html',
  styleUrls: ['./../form-element.scss', './form-filepicker.component.scss']
})
export class FormFilepickerComponent extends FormElementComponent {

  @Input() label = 'Pick a file';
  @Input() prompt = 'Choose file ...';

  constructor() {
    super();
  }

  onFileChange(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.prompt = `${file.name}`;
      };
    } else {
      this.prompt = 'Choose file ...';
    }
  }
}
