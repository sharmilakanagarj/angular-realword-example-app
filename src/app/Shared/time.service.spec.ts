import { TestBed } from '@angular/core/testing';

import { TimsService } from './tims.service';

describe('TimsService', () => {
  let service: TimsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
