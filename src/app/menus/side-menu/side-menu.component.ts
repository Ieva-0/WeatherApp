import { Component, HostListener, OnInit } from '@angular/core';
import { City } from '../../classes/City';
import { MenuService } from '../menu-service.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent implements OnInit {

  public get cityList() {
    return this.menuService.cityList;
  }

  public get isSideMenuCollapsed() {
    return this.menuService.isSideMenuCollapsed;
  }

  public window: Window = window;

  constructor(
    public menuService: MenuService,
  ) { }
  
  ngOnInit() {
    this.changeCity(this.menuService.currentCity);
    
  }

  changeCity(city: City) {
    this.menuService.changeCurrentCity(city);
    this.menuService.isSideMenuCollapsed = true;
  }

  isCitySelected(city: City) {
    return this.menuService.currentCity.name == city.name && this.menuService.currentCity.latitude == city.latitude && this.menuService.currentCity.longitude == city.longitude; 
  }

  @HostListener('document:click', ['$event.target'])
  public documentClick(event: any): void {
    if (!this.checkIfParentObjectClassNotListed('side-menu-container', event, 0, 10) && !this.checkIfParentObjectClassNotListed('top-menu-container', event, 0, 10)) {
      this.menuService.isSideMenuCollapsed = true;
    }
  }

  checkIfParentObjectClassNotListed(className: string, event: any, count:number , limit: number):boolean {
    if (event && event.classList && count <= limit) {
      if (event.classList.contains(className)) {
        return true;
      } else {
        return this.checkIfParentObjectClassNotListed(className, event.parentElement, count +1, limit);
      }
    }
    return false;
  }

}
