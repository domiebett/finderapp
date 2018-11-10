import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inflate-input',
  templateUrl: './inflate-input.component.html',
  styleUrls: ['./inflate-input.component.scss']
})
export class InflateInputComponent implements OnInit {

  @Output() submitted = new EventEmitter();
  searchText: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted.emit(this.searchText);
  }

}
