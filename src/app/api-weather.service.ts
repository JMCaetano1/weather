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
    let apiWeather = `${this.baseUrl}city=${local}&country=BR&lang=pt&key=${this.key}`

    return this.http.get(apiWeather);
  }
}
