import { TestBed } from '@angular/core/testing';

import { PedidoTemporalService } from './pedido-temporal.service';

describe('PedidoTemporalService', () => {
  let service: PedidoTemporalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedidoTemporalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
