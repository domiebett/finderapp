import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { ItemService } from '../../../_services/http/item.service';

import { ItemType } from './../../../_models/item';
import { Item } from '../../../_models/item';

@Component({
  selector: 'app-grouped-items',
  templateUrl: './grouped-items.component.html',
  styleUrls: ['./grouped-items.component.scss']
})
export class GroupedItemsComponent implements OnInit, OnChanges {

  @Input() itemType: ItemType;

  items: Item[] = [];
  params = {};

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getItems();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.generateParams(this.itemType);
    this.getItems();
  }

  /**
   * Gets lost items and sets them.
   */
  getItems() {
    this.itemService.getItems(this.params).subscribe((response) => {
      this.items = response['items'];
    });
  }

  /**
   * Populates the params object with values for filtering.
   */
  generateParams(itemType: ItemType) {
    if (this.itemType) {
      this.params['reporter'] =
        (itemType === ItemType.Found) ?
        'finder' : 'owner';
    }
  }
}
