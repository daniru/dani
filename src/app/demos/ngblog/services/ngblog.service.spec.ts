import { TestBed, inject } from '@angular/core/testing';

import { NgblogService } from './ngblog.service';

describe('NgblogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgblogService]
    });
  });

  it('should be created', inject([NgblogService], (service: NgblogService) => {
    expect(service).toBeTruthy();
  }));
});
