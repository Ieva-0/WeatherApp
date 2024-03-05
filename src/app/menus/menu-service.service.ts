import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  public appName: string = "Weather Forecast";

  public isSideMenuCollapsed: boolean = false;

  constructor() { 

  }

}
