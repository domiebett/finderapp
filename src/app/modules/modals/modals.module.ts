import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModalContainerComponent } from './modal-container/modal-container.component';
import { AddItemModalComponent } from './add-item-modal/add-item-modal.component';
import { SharedModule } from '../shared/shared.module';
import { FormElementsModule } from '../form-elements/form-elements.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    FormElementsModule
  ],
  declarations: [ModalContainerComponent, AddItemModalComponent],
  exports: [ ModalContainerComponent]
})
export class ModalsModule { }
