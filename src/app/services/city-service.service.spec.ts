import { TestBed } from '@angular/core/testing';

import { CityService } from './city-service.service';

describe('BaseWeatherAppServiceService', () => {
  let service: CityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
