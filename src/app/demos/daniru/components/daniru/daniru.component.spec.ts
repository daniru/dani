import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaniruComponent } from './daniru.component';

describe('DaniruComponent', () => {
  let component: DaniruComponent;
  let fixture: ComponentFixture<DaniruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaniruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaniruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
