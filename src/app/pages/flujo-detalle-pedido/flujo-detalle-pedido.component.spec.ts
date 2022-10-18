import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlujoDetallePedidoComponent } from './flujo-detalle-pedido.component';

describe('FlujoDetallePedidoComponent', () => {
  let component: FlujoDetallePedidoComponent;
  let fixture: ComponentFixture<FlujoDetallePedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlujoDetallePedidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlujoDetallePedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
