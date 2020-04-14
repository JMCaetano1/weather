import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemperatureComponent } from './temperature/temperature.component';
<<<<<<< HEAD
import { SearchComponent } from './search/search.component';
=======
>>>>>>> 68102388e1e29ee916545047921b64f0f7156376

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    TemperatureComponent,
    SearchComponent
=======
    TemperatureComponent
>>>>>>> 68102388e1e29ee916545047921b64f0f7156376
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
