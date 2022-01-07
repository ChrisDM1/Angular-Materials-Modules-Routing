import { TestBed } from '@angular/core/testing';

import { LibAllService } from './lib-all.service';

describe('LibAllService', () => {
  let service: LibAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
