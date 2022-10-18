import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenProductoComponent } from './resumen-producto.component';

describe('ResumenProductoComponent', () => {
  let component: ResumenProductoComponent;
  let fixture: ComponentFixture<ResumenProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumenProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumenProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
