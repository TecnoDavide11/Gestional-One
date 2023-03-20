import { TestBed } from '@angular/core/testing';

import { FornitorService } from './fornitor.service';

describe('FornitorService', () => {
  let service: FornitorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FornitorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
