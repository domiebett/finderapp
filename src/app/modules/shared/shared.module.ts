import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemComponent } from './item/item.component';
import { ItemsNavigatorComponent } from './items-navigator/items-navigator.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [RouterModule, CommonModule],
  exports: [ItemComponent, ItemsNavigatorComponent],
  declarations: [ItemComponent, ItemsNavigatorComponent, ButtonComponent],
})
export class SharedModule { }
