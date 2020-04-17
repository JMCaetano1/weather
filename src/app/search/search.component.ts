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
  temp: string
  windSpeed: string
  humidity: string



  constructor(private apiservice: ApiWeatherService) { }

  ngOnInit(): void {
  this.city = "Garanhuns" 
  this.sendCity("click")

  }

  getCity(event) {
    this.city = event.target.value
    console.log(this.city);
  }

  sendCity(event) {
    this.apiservice.getWeather(this.city).subscribe((res) => {
      this.weather = new Object(res);
      this.temp = this.weather.data[0].temp
      this.city = this.weather.data[0].city_name
      this.humidity = this.weather.data[0].rh
      this.windSpeed = this.weather.data[0].wind_spd
      
    });
  }
  
  newTemp: {}
  
  formaterTemp(){
    this.newTemp = this.temp.split(".",2)
    this.temp = this.newTemp[0]
    console.log(this.temp)
  }
  
}




