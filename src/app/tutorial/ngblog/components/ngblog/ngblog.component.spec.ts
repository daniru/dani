import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgblogComponent } from './ngblog.component';

describe('NgblogComponent', () => {
  let component: NgblogComponent;
  let fixture: ComponentFixture<NgblogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgblogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
