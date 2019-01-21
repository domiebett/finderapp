import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InflateInputComponent } from './inflate-input.component';

describe('InflateInputComponent', () => {
  let component: InflateInputComponent;
  let fixture: ComponentFixture<InflateInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InflateInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InflateInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
