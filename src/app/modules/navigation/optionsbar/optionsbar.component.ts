import { Component, OnInit } from '@angular/core';

import { Button } from '../../../_models/button';

@Component({
  selector: 'app-optionsbar',
  templateUrl: './optionsbar.component.html',
  styleUrls: ['./optionsbar.component.scss']
})
export class OptionsbarComponent implements OnInit {

  addButtonClass = Button.DefaultRounded;
  searchText: string;

  constructor() { }

  ngOnInit() {
  }

  search(searchText) {
    console.log('searching', searchText);
  }

}
