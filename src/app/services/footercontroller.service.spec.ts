import { TestBed } from '@angular/core/testing';

import { FootercontrollerService } from './footercontroller.service';

describe('FootercontrollerService', () => {
  let service: FootercontrollerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FootercontrollerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
