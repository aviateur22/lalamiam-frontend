import { TestBed } from '@angular/core/testing';

import { LalamiamHttpInterceptor } from './lalamiam-http.interceptor';

describe('LalamiamHttpInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LalamiamHttpInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LalamiamHttpInterceptor = TestBed.inject(LalamiamHttpInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
