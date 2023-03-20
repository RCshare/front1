import { TestBed } from '@angular/core/testing';

import { UserFavoriteService } from './user-favorite.service';

describe('UserFavoriteService', () => {
  let service: UserFavoriteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserFavoriteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
