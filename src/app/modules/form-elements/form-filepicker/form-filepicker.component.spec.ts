import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFilepickerComponent } from './form-filepicker.component';

describe('FormFilepickerComponent', () => {
  let component: FormFilepickerComponent;
  let fixture: ComponentFixture<FormFilepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFilepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFilepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
