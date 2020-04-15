import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class ApiWeatherService {
  baseUrl = `https://api.weatherbit.io/v2.0/current?`
  key = `f51a11ac24e04624887c85579988263a`

  constructor(private http: HttpClient) { }

  getWeather(local: string) {
<<<<<<< HEAD
    let urlApi = this.http.get(this.baseUrl);

    console.log(`${urlApi}city=${local}&key=${this.key}`)
=======
    let apiWeather = `${this.baseUrl}city=${local}&lang=pt&key=${this.key}`

    return this.http.get(apiWeather);
>>>>>>> 4e5ac78c9f5ef47aeaf4b07b9e0921cabe7985cd
  }
}
