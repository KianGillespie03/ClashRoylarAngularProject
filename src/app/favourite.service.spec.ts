import { TestBed } from '@angular/core/testing';
import { FavoriteService } from './favourite.service';

describe('FavouriteService', () => {
  let service: FavoriteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
