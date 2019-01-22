import { Component, OnInit } from '@angular/core';

import { ModalService } from 'src/app/services/application/modal.service';

import { Button } from '../../../_models/enums/button';
import { AddItemModalComponent } from '../../modals/add-item-modal/add-item-modal.component';

@Component({
  selector: 'app-optionsbar',
  templateUrl: './optionsbar.component.html',
  styleUrls: ['./optionsbar.component.scss']
})
export class OptionsbarComponent implements OnInit {

  addButtonClass = Button.DefaultRounded;
  searchText: string;

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  search(searchText) {
    console.log('searching', searchText);
  }

  openAddItemModal() {
    let inputs = { isMobile: false };
    this.modalService.init(AddItemModalComponent, inputs, {});
  }

}
