import { TestBed } from '@angular/core/testing';

import { FinelService } from './finel.service';

describe('FinelService', () => {
  let service: FinelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
