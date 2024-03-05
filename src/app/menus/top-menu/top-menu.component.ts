import { Component, ViewEncapsulation } from '@angular/core';
import { CityService } from '../../services/city-service.service';
import { City } from '../../classes/City';
import { MenuService } from '../menu-service.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.css',
  encapsulation: ViewEncapsulation.None

})
export class TopMenuComponent {

  public get appName(): string {
    return this.menuService.appName;
  }

  public get currentCity(): City {
    return this.cityService.currentCity;
  }

  public get currentCityWeatherCode(): number {
    return this.cityService.currentCityWeatherCode;
  }

  public get currentCityTemperature(): number {
    return this.cityService.currentCityTemperature;
  }

  constructor(
    public cityService: CityService,
    public menuService: MenuService,
  ) { }

  public toggleSideMenuCollapse() {
    this.menuService.isSideMenuCollapsed = !this.menuService.isSideMenuCollapsed; 
  }
}
