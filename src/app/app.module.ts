import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './menus/side-menu/side-menu.component';
import { TopMenuComponent } from './menus/top-menu/top-menu.component';
import { WeatherForecastComponent } from './pages/weather-forecast/weather-forecast.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    TopMenuComponent,
    WeatherForecastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
