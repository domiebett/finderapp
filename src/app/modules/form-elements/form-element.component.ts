import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-form-element'
})
export class FormElementComponent {
    @Input() control: FormControl;
    @Input() label: string;
    @Input() required = true;

    constructor() { }
}
