import { TestBed } from '@angular/core/testing';

import { HttpBookmarkService } from './http-bookmark.service';

describe('HttpBookmarkService', () => {
  let service: HttpBookmarkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpBookmarkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
