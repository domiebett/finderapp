import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ItemComponent } from './item/item.component';
import { ItemsNavigatorComponent } from './items-navigator/items-navigator.component';

@NgModule({
  imports: [RouterModule],
  exports: [ItemComponent, ItemsNavigatorComponent],
  declarations: [ItemComponent, ItemsNavigatorComponent],
})
export class SharedModule { }
