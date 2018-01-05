import { TestBed, inject } from '@angular/core/testing';

import { StarwarsService } from './starwars.service';

describe('StarwarsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [StarwarsService],
      imports: []
    });
  });

  it('should be created', inject([StarwarsService], (service: StarwarsService) => {
    expect(service).toBeTruthy();
  }));
});
