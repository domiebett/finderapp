import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { text } from '@angular/core/src/render3/instructions';

import { Color } from '../../../_models/color';
import { Button } from '../../../_models/button';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() text: string;
  @Input() backgroundOpacity: number;
  @Input() buttonClassName: Button = Button.Default;

  @Output() clicked = new EventEmitter();

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
