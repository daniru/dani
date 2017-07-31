import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFilesComponent } from './item-files.component';

describe('ItemFilesComponent', () => {
  let component: ItemFilesComponent;
  let fixture: ComponentFixture<ItemFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
