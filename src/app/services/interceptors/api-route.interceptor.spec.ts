import { TestBed, inject } from '@angular/core/testing';

import { ApiRouteInterceptor } from './api-route.interceptor';

describe('ApiRouteInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiRouteInterceptor]
    });
  });

  it('should be created', inject([ApiRouteInterceptor], (service: ApiRouteInterceptor) => {
    expect(service).toBeTruthy();
  }));
});
