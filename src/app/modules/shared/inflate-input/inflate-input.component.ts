import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-inflate-input',
  templateUrl: './inflate-input.component.html',
  styleUrls: ['./inflate-input.component.scss']
})
export class InflateInputComponent implements OnInit {

  @Input() minChars: number = 1;
  @Output() submitted = new EventEmitter();
  searchText: string = '';

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.searchText.length < this.minChars) {
      alert(`Your input must be more than ${this.minChars} characters.`)
    }
    this.submitted.emit(this.searchText);
  }

}
