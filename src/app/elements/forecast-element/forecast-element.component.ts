import { Component, Input, OnInit } from '@angular/core';
import { ForecastData } from '../../classes/ForecastData';
import { mapCodeToIcon, Icons } from '../icon-element/icon-element.component';

@Component({
  selector: 'app-forecast-element',
  templateUrl: './forecast-element.component.html',
  styleUrl: './forecast-element.component.css'
})
export class ForecastElementComponent implements OnInit {

  @Input()
  forecastDataEntry: ForecastData = new ForecastData("", 0, 0, 0, 0, 0, 0, 0);

  public backgroundImage: string = 'radial-gradient(var(--yellow), var(--blue))';

  ngOnInit() {
    this.backgroundImage = this.mapBackgroundImage(this.forecastDataEntry.weatherCode);
  }

  mapBackgroundImage(weatherCode: number) {
    switch(mapCodeToIcon(weatherCode)) {
      case Icons.SUN:
      default:
        return 'radial-gradient(var(--yellow), var(--blue))';
        break;
    }
  }
}
