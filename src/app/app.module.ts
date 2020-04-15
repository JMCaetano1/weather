import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from "@angular/common/http";
import { ApiWeatherService } from './api-weather.service';

@NgModule({
  declarations: [
    AppComponent,
    TemperatureComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [ApiWeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
