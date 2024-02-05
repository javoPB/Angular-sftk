import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { guardDeEjemploGuard } from './guard-de-ejemplo.guard';

describe('guardDeEjemploGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => guardDeEjemploGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
