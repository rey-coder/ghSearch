import { TestBed } from '@angular/core/testing';

import { GHSearchService } from './gh-search.service';

describe('SearchService', () => {
  let service: GHSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GHSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
