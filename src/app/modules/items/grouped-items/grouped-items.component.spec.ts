import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupedItemsComponent } from './grouped-items.component';

describe('GroupedItemsComponent', () => {
  let component: GroupedItemsComponent;
  let fixture: ComponentFixture<GroupedItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupedItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
