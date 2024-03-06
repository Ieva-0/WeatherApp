import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './menus/side-menu/side-menu.component';
import { TopMenuComponent } from './menus/top-menu/top-menu.component';
import { WeatherForecastComponent } from './pages/weather-forecast/weather-forecast.component';

import { HttpClientModule } from '@angular/common/http';
import { ForecastElementComponent } from './elements/forecast-element/forecast-element.component';

import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { IconElementComponent } from './elements/icon-element/icon-element.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    TopMenuComponent,
    WeatherForecastComponent,
    ForecastElementComponent,
    IconElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgSelectModule, 
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
