import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ItemsComponent } from './items/items.component';
import { GroupedItemsComponent } from './grouped-items/grouped-items.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  exports: [ItemsComponent],
  declarations: [ItemsComponent, GroupedItemsComponent]
})
export class ItemsModule { }
