import { TestBed } from '@angular/core/testing';

import { LoginsService } from './logins.service';

describe('LoginsService', () => {
  let service: LoginsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
