import { TestBed, inject } from '@angular/core/testing';

import { TextstateService } from './textstate.service';

describe('TextstateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TextstateService]
    });
  });

  it('should be created', inject([TextstateService], (service: TextstateService) => {
    expect(service).toBeTruthy();
  }));
});
