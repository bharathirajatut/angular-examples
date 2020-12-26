import { TestBed } from '@angular/core/testing';

import { UniqueService } from './unique.service';

describe('UniqueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UniqueService = TestBed.get(UniqueService);
    expect(service).toBeTruthy();
  });
});
