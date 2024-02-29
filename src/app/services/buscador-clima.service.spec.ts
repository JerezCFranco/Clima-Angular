import { TestBed } from '@angular/core/testing';

import { BuscadorClimaService } from './buscador-clima.service';

describe('BuscadorClimaService', () => {
  let service: BuscadorClimaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscadorClimaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
