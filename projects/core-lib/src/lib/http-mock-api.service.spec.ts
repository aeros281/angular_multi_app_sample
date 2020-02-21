import { TestBed } from '@angular/core/testing';

import { HttpMockApiService } from './http-mock-api.service';

describe('HttpApiService', () => {
  let service: HttpMockApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpMockApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
