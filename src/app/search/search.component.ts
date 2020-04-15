import { Component, OnInit } from '@angular/core';
import { ApiWeatherService } from "../api-weather.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  weather: any
  city: string


  constructor(private apiservice: ApiWeatherService) { }

  ngOnInit(): void {


  }

  getCity(event) {
    this.city = event.target.value
    console.log(this.city)
  }

  sendCity(event) {
    this.apiservice.getWeather(this.city).subscribe((res) => {
      this.weather = new Object(res);
      console.log(this.weather.data);
    });
  }

}
