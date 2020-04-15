import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { SearchComponent } from './search/search.component';
<<<<<<< HEAD
// import { HttpClient } from "@angular/common/http";
// import { ApiWeatherService } from './api-weather.service';
=======
import { HttpClientModule } from "@angular/common/http";
import { ApiWeatherService } from './api-weather.service';
>>>>>>> 4e5ac78c9f5ef47aeaf4b07b9e0921cabe7985cd

@NgModule({
  declarations: [
    AppComponent,
    TemperatureComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    // HttpClient,
    // ApiWeatherService
  ],
  providers: [],
=======
    HttpClientModule
    
  ],
  providers: [ApiWeatherService],
>>>>>>> 4e5ac78c9f5ef47aeaf4b07b9e0921cabe7985cd
  bootstrap: [AppComponent]
})
export class AppModule { }
