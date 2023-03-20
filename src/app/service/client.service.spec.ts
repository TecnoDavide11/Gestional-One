import { TestBed } from '@angular/core/testing';

import { ClientiService } from './client.service';

describe('ClientiService', () => {
  let service: ClientiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
