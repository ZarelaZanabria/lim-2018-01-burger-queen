import { TestBed } from '@angular/core/testing';

import { ListMenuService } from './list-menu.service';

describe('ListMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListMenuService = TestBed.get(ListMenuService);
    expect(service).toBeTruthy();
  });
});
