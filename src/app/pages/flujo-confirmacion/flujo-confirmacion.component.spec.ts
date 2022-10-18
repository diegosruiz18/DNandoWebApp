import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlujoConfirmacionComponent } from './flujo-confirmacion.component';

describe('FlujoConfirmacionComponent', () => {
  let component: FlujoConfirmacionComponent;
  let fixture: ComponentFixture<FlujoConfirmacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlujoConfirmacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlujoConfirmacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
