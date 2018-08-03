import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsNavigatorComponent } from './items-navigator.component';

describe('ItemsNavigatorComponent', () => {
  let component: ItemsNavigatorComponent;
  let fixture: ComponentFixture<ItemsNavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsNavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
