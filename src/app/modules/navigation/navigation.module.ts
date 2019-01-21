import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { NavbarComponent } from './navbar/navbar.component';
import { OptionsbarComponent } from './optionsbar/optionsbar.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    OptionsbarComponent
  ],
  declarations: [NavbarComponent, OptionsbarComponent]
})
export class NavigationModule { }
