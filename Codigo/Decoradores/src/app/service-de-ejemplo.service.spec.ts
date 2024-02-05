import { TestBed } from '@angular/core/testing';

import { ServiceDeEjemploService } from './service-de-ejemplo.service';

describe('ServiceDeEjemploService', () => {
  let service: ServiceDeEjemploService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceDeEjemploService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
