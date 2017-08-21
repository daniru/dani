import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditItemFileComponent } from './edit-item-file.component';

describe('EditItemFileComponent', () => {
  let component: EditItemFileComponent;
  let fixture: ComponentFixture<EditItemFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditItemFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditItemFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
