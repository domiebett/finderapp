import { Component, OnInit, Input } from '@angular/core';

import { Item } from '../../../_models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: Item;
  mainImageUrl: string;

  constructor() { }

  ngOnInit() {
    if (this.item.images.length > 0) {
      this.mainImageUrl = this.item.images[0].url;
    }
  }
}
