import { Component, OnInit } from '@angular/core';
import { City } from '../../classes/City';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent implements OnInit {
  
  public cityList: City[] = [];

  public isSideMenuCollapsed: boolean = false;
  
  ngOnInit() {
    this.cityList.push(new City("New York", 40.7143, -74.006));
    this.cityList.push(new City("Paris", 48.8534, 2.3488));
    this.cityList.push(new City("Melbourne", -37.814, 144.9633));
    this.cityList.push(new City("Tokyo", 35.6895, 139.6917));
    this.cityList.push(new City("Cape Town", -33.9258, 18.4232));
    this.cityList.push(new City("Vilnius", 54.6892, 25.2798));
  }
}
