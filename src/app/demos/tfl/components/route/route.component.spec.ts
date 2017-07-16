import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoppointsComponent } from './stoppoints.component';

describe('StoppointsComponent', () => {
  let component: StoppointsComponent;
  let fixture: ComponentFixture<StoppointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoppointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoppointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
