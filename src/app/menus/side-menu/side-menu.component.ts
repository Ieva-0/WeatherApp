import { Component, OnInit } from '@angular/core';
import { City } from '../../classes/City';
import { CityService } from '../../services/city-service.service';
import { MenuService } from '../menu-service.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent implements OnInit {

  public get cityList() {
    return this.cityService.cityList;
  }

  public get isSideMenuCollapsed() {
    return this.menuService.isSideMenuCollapsed;
  }

  constructor(
    public cityService: CityService,
    public menuService: MenuService,
  ) { }
  
  ngOnInit() {
    this.changeCity(this.cityService.currentCity);
    
  }

  changeCity(city: City) {
    this.cityService.changeCurrentCity(city);
  }

  isCitySelected(city: City) {
    return this.cityService.currentCity.name == city.name && this.cityService.currentCity.latitude == city.latitude && this.cityService.currentCity.longitude == city.longitude; 
  }
}
