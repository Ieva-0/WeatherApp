import { Component, ViewEncapsulation } from '@angular/core';
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
    return this.menuService.currentCity;
  }

  public get currentCityWeatherCode(): number {
    return this.menuService.currentCityWeatherCode;
  }

  public get currentCityTemperature(): number {
    return this.menuService.currentCityTemperature;
  }

  constructor(
    public menuService: MenuService,
  ) { }

  public toggleSideMenuCollapse() {
    this.menuService.isSideMenuCollapsed = !this.menuService.isSideMenuCollapsed; 
  }
}
