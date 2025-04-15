import { TestBed } from '@angular/core/testing';

import { SoftTokComponentsService } from './soft-tok-components.service';

describe('SoftTokComponentsService', () => {
  let service: SoftTokComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoftTokComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
