import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {

  private baseUrl: string = "https://api.open-meteo.com/v1/forecast";

  constructor(
    private http: HttpClient,
  ) { }

  getWeatherForecastData(httpParams: HttpParams) {
    const options = {
      params: httpParams,
    };
    return this.http.get(this.baseUrl, options);
  }
}
