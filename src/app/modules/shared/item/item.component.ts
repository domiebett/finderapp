import { Component, OnInit, Input } from '@angular/core';

import { Item } from '../../../_models/interfaces/item';
import { Button } from '../../../_models/enums/button';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: Item;
  
  mainImageUrl: string = '../../../../assets/images/no_image.png';
  actionButtonClass: Button = Button.PrimaryLightTranslucent;

  constructor() { }

  ngOnInit() {
    if (this.item.images.length > 0) {
      this.mainImageUrl = this.item.images[0].url;
    }
  }

  /**
   * Action once the view item button is cliced.
   */
  onActionButtonClick() {
    console.log('button clicked');
  }
}
