import { Component, HostListener, OnInit } from '@angular/core';
import { WeatherForecastService } from './weather-forecast.service';
import { ForecastDuration } from '../../classes/ForecastDuration';
import { ForecastData, HourlyData } from '../../classes/ForecastData';
import { HttpParams } from '@angular/common/http';
import { MenuService } from '../../menus/menu-service.service';
import { Animations } from '../../classes/Animations';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrl: './weather-forecast.component.css',
  animations: [Animations.listAnimation]
})
export class WeatherForecastComponent implements OnInit {

  public get currentCity() {
    return this.menuService.currentCity;
  }

  public selectedDuration: number = -1;

  public forecastDurations: ForecastDuration[] = [
    new ForecastDuration(3, "3 days"),
    new ForecastDuration(7, "A week"),
    new ForecastDuration(16, "16 days"),
  ];

  public forecastData: ForecastData[] = [];

  constructor(
    public weatherForecastService: WeatherForecastService,
    public menuService: MenuService,
  ) { }

  ngOnInit(): void {
    if (window.innerWidth < 701) {
      this.menuService.isSideMenuCollapsed = true;
    } else {
      this.menuService.isSideMenuCollapsed = false;
    }
    this.selectedDuration = this.forecastDurations[0].length;
    this.menuService.cityChange.subscribe((value: any) => {
      this.getForecastData();
    });
  }

  getForecastData() {
    this.forecastData = [];
    if (this.currentCity !== undefined) {
      let params = new HttpParams()
        .set('forecast_days', this.selectedDuration)
        .set('latitude', this.currentCity.latitude)
        .set('longitude', this.currentCity.longitude)
        .set('daily', 'weather_code,temperature_2m_max,temperature_2m_min,uv_index_max,precipitation_sum,wind_gusts_10m_max,wind_direction_10m_dominant')
        .set('hourly', 'temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,precipitation,wind_gusts_10m')
        .set('timezone', 'auto')
        .set('wind_speed_unit', 'ms');
      this.weatherForecastService.getWeatherForecastData(params).subscribe((result: any) => {
        if (result) {
          console.log(result)
          for (let i = 0; i < this.selectedDuration; i++) {
            let dayEntry = new ForecastData(
              result.daily.time[i],
              Math.round(result.daily.temperature_2m_min[i]),
              Math.round(result.daily.temperature_2m_max[i]),
              Math.round(result.daily.precipitation_sum[i]),
              result.daily.uv_index_max[i],
              Math.round(result.daily.weather_code[i]),
              Math.round(result.daily.wind_gusts_10m_max[i]),
              Math.round(result.daily.wind_direction_10m_dominant[i]));
            for (let j = i * 24; j < i * 24 + 24; j++) {
              let hourEntry = new HourlyData(
                result.hourly.time[j].split('T')[1],
                Math.round(result.hourly.temperature_2m[j]),
                result.hourly.relative_humidity_2m[j],
                Math.round(result.hourly.apparent_temperature[j]),
                Math.round(result.hourly.precipitation[j]),
                result.hourly.precipitation_probability[j],
                Math.round(result.hourly.wind_gusts_10m[j])
              );
              dayEntry.hourlyData.push(hourEntry);
            }

            this.forecastData.push(dayEntry);
          }
        }
      });
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth < 701) {
      this.menuService.isSideMenuCollapsed = true;
    } else {
      this.menuService.isSideMenuCollapsed = false;
    }
  }
}

