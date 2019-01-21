import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ItemComponent } from './item/item.component';
import { ItemsNavigatorComponent } from './items-navigator/items-navigator.component';
import { ButtonComponent } from './button/button.component';
import { InflateInputComponent } from './inflate-input/inflate-input.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    ItemComponent,
    ItemsNavigatorComponent,
    ButtonComponent,
    InflateInputComponent
  ],
  declarations: [
    ItemComponent,
    ItemsNavigatorComponent,
    ButtonComponent,
    InflateInputComponent
  ],
})
export class SharedModule { }
