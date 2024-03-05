import { Injectable } from '@angular/core';
import { Coordinates } from '../classes/Coordinates';
import { City } from '../classes/City';
import { Subject } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { WeatherForecastService } from '../pages/weather-forecast/weather-forecast.service';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  // public currentCity: string = "none";

  // public cityList: Map<string, Coordinates> = new Map<string, Coordinates>([
  //   ["New York", new Coordinates(40.7143, -74.006)],
  //   ["Paris", new Coordinates(48.8534, 2.3488)],
  //   ["Melbourne", new Coordinates(-37.814, 144.9633)],
  //   ["Tokyo", new Coordinates(35.6895, 139.6917)],
  //   ["Cape Town", new Coordinates(-33.9258, 18.4232)],
  //   ["Vilnius", new Coordinates(54.6892, 25.2798)]
  // ]);

  public currentCity: City = new City("New York", 40.7143, -74.006);

  public cityList: City[] = [
    new City("New York", 40.7143, -74.006),
    new City("Paris", 48.8534, 2.3488),
    new City("Melbourne", -37.814, 144.9633),
    new City("Tokyo", 35.6895, 139.6917),
    new City("Cape Town", -33.9258, 18.4232),
    new City("Vilnius", 54.6892, 25.2798)
  ];

  cityChange: Subject<City> = new Subject<City>();

  public currentCityTemperature: number = 0;

  public currentCityWeatherCode: number = 0;

  constructor(
    public weatherForecastService: WeatherForecastService,
  ) { 
    this.cityChange.subscribe((value: City) => {
      this.currentCity = value;
    });
  }

  changeCurrentCity(city: City) {
    this.cityChange.next(city);
    let params = new HttpParams()
    .set('latitude', this.currentCity.latitude)
    .set('longitude', this.currentCity.longitude)
    .set('current', 'temperature_2m,weather_code')
    .set('timezone', 'auto');
    this.weatherForecastService.getWeatherForecastData(params).subscribe((result: any) => {
      if(result) {
        console.log(result)
        // this.currentCityWeatherCode = result.current.weather_code;
        this.currentCityWeatherCode = 30;
        this.currentCityTemperature = result.current.temperature_2m;
      }
    });
  }

}
