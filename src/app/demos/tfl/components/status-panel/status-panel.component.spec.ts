import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusTubeComponent } from './status-tube.component';

describe('StatusTrainComponent', () => {
  let component: StatusTubeComponent;
  let fixture: ComponentFixture<StatusTubeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusTubeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusTubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
