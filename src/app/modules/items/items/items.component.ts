import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { throwError } from 'rxjs';

import { ItemType } from '../../../_models/item';

@Component({
  selector: 'app-lost-and-found',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  itemType: ItemType = ItemType.Found;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.setItemType(params['type']);
    });
  }

  ngOnInit() { }

  /**
   * Sets the type of the items to be displayed
   *
   * @param itemType
   */
  setItemType(itemType: string) {
    if (! ['found', 'lost'].includes(itemType)) {
      return this.router.navigate(['/items/found']);
    }

    this.itemType = (itemType === 'lost') ?
      ItemType.Lost : ItemType.Found;
  }
}
