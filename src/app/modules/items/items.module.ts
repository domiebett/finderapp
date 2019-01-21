import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { NavigationModule } from '../navigation/navigation.module';

import { ItemsComponent } from './items/items.component';
import { GroupedItemsComponent } from './grouped-items/grouped-items.component';

@NgModule({
  imports: [CommonModule, SharedModule, NavigationModule],
  exports: [ItemsComponent],
  declarations: [ItemsComponent, GroupedItemsComponent]
})
export class ItemsModule { }
