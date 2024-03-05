import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-element',
  templateUrl: './icon-element.component.html',
  styleUrl: './icon-element.component.css'
})
export class IconElementComponent implements OnInit {

  @Input()
  weatherCode: number = -1;

  public icon: Icons = Icons.CLOUD;

  Icons = Icons;

  ngOnInit() {
    this.icon = mapCodeToIcon(this.weatherCode);
  }
 
}

export enum Icons {
  CLOUD = 0,
  CLOUD_SUN = 1,
  CLOUD_SUN_RAIN = 2,
  CLOUD_RAIN = 3,
  CLOUD_RAIN_HEAVY = 4,
  CLOUD_MOON_RAIN = 5,
  CLOUD_MOON = 6,
  CLOUD_BOLT = 7,
  SUN = 8,
  SMOG = 9,
  SNOW = 10,
}

export function mapCodeToIcon(weatherCode: number): Icons {
  switch (weatherCode) {
    case 3:
      return Icons.CLOUD;
      break;
    case 50 || 51 || 52 || 53 || 54 || 55 || 56 || 57 || 58 || 59 || 80 || 81 || 91:
      return Icons.CLOUD_RAIN;
      break;
    case 60 || 61 || 62 || 63 || 64 || 65 || 66 || 67 || 68 || 69 || 82 || 83 || 84 || 92:
      return Icons.CLOUD_RAIN_HEAVY;
      break;
    case 13 || 17 || 29 || 95 || 96 || 97 || 98 || 99:
      return Icons.CLOUD_BOLT;
      break;
    case 1:
      return Icons.SUN;
      break;
    case 40 || 41 || 42 || 43 || 44 || 45 || 46 || 47 || 48 || 49:
      return Icons.SMOG;
      break;
    case 70 || 71 || 72 || 73 || 74 || 75 || 76 || 77 || 78 || 79 || 84 || 86 || 87 || 88 || 89 || 90 || 93 || 94:
      return Icons.SNOW;
      break;
    default:
      return Icons.CLOUD_SUN;
      break;
  }
}