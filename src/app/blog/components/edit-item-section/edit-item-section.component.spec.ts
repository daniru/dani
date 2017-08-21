import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditItemSectionComponent } from './edit-item-section.component';

describe('EditItemSectionComponent', () => {
  let component: EditItemSectionComponent;
  let fixture: ComponentFixture<EditItemSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditItemSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditItemSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
