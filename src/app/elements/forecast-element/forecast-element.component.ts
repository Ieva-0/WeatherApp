import { Component, Input, OnInit } from '@angular/core';
import { ForecastData } from '../../classes/ForecastData';
import { mapCodeToIcon, Icons } from '../icon-element/icon-element.component';

@Component({
  selector: 'app-forecast-element',
  templateUrl: './forecast-element.component.html',
  styleUrl: './forecast-element.component.css',
})
export class ForecastElementComponent implements OnInit {

  @Input()
  forecastDataEntry: ForecastData = new ForecastData("", 0, 0, 0, 0, 0, 0, 0);

  public showDetails: boolean = false;

  public backgroundImage: string = 'radial-gradient(farthest-side at top left, #EEEEEE,transparent), radial-gradient(farthest-side at bottom right, #DDDDDD,#0000FF50)';

  ngOnInit() {
    this.backgroundImage = this.mapBackgroundImage(this.forecastDataEntry.weatherCode);
  }

  mapBackgroundImage(weatherCode: number) {
    switch (mapCodeToIcon(weatherCode)) {
      case Icons.SUN:
        return 'radial-gradient(circle 400px at top left, #FFFF00BB, #0000FF50), radial-gradient(farthest-side at bottom right, #FFFFFF, #0000FF50)';
        break;
      case Icons.CLOUD_SUN:
        return 'radial-gradient(circle 150px at top left, #FFFF0099, transparent), radial-gradient(farthest-side at top left, #FFFFFF80, transparent), radial-gradient(farthest-side at bottom right, #FFFFFF, #0000FF80)';
        break;
      case Icons.CLOUD_BOLT:
        return 'radial-gradient(farthest-side at top left, #999999, transparent), radial-gradient(farthest-side at bottom right, #888888, #FFFFFF50), radial-gradient(circle at top right, white, #FFFF00AA)';
        break;
      case Icons.CLOUD_RAIN || Icons.CLOUD_RAIN_HEAVY || Icons.SMOG || Icons.SNOW:
        return 'radial-gradient(farthest-side at top left, #999999,transparent), radial-gradient(farthest-side at bottom right, #BBBBBB,#0000FF50)';
      case Icons.CLOUD:
      default:
        return 'radial-gradient(farthest-side at top left, #FFFFFF, transparent), radial-gradient(farthest-side at bottom right, #FFFFFF, #0000FF80)';
        break;
    }
  }

  getRotationValue() {
    return 'rotate(' + this.forecastDataEntry.windDirection + 'deg)';
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

}
