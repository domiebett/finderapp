import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CategoryService } from './../../../services/http/category.service';

import { Button } from './../../../_models/enums/button';

import { Category } from './../../../_models/interfaces/category';
import { RadioOption } from './../../../_models/interfaces/radio';

@Component({
  selector: 'app-add-item-modal',
  templateUrl: './add-item-modal.component.html',
  styleUrls: ['./add-item-modal.component.scss']
})
export class AddItemModalComponent implements OnInit {

  addItemForm: FormGroup;
  submitButtonClass: Button = Button.Primary;
  categories: Category[] = [];
  reporterRadioOptions: RadioOption[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.createAddItemForm();
    this.getCategories();
    this.createReporterRadioOptions();
  }

  /**
   * Fetch categories
   */
  getCategories() {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = this.formatCategoriesForDropdown(response['categories']);
    });
  }

  /**
   * Creates radio form options for reporter selection
   */
  createReporterRadioOptions() {
    const reporterRadioOptions = [
      { text: 'I lost the item', value: 'owner', popup: 'We hope you find it.'},
      { text: 'I picked the item', value: 'finder', popup: 'We appreciate your help.'}
    ];

    this.reporterRadioOptions = reporterRadioOptions;
  }

  /**
   * Formats categories to be used by the dropdown selector
   */
  formatCategoriesForDropdown(categories) {
    return categories.map((category) => {
      return { name: category.name, value: category.id };
    });
  }

  /**
   * Creates a form group for the add item form
   */
  createAddItemForm() {
    this.addItemForm = this.formBuilder.group({
      name: '',
      description: '',
      reporter: '',
      category: ''
    });
  }

  onSubmit() {
    console.log(this.addItemForm.value);
  }
}
