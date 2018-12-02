import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Button, ButtonHeight } from '../../../_models/enums/button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() text: string;
  @Input() backgroundOpacity: number;
  @Input() buttonClassName: Button = Button.Default;
  @Input() buttonIsDisabled: boolean = false;
  @Input() buttonHeight: ButtonHeight = ButtonHeight.Medium;

  @Output() clicked = new EventEmitter();

  disabledButtonClass = Button.Disabled;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Emits event when clicked
   */
  onClick() {
    this.clicked.emit();
  }
}
