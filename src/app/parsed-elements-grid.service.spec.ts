import { TestBed } from '@angular/core/testing';

import { ParsedElementsGridService } from './parsed-elements-grid.service';

describe('ParsedElementsGridService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParsedElementsGridService = TestBed.get(ParsedElementsGridService);
    expect(service).toBeTruthy();
  });
});
