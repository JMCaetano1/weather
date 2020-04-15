import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
// import { ApiWeatherService } from "../api-weather.service";
=======
import { ApiWeatherService } from "../api-weather.service";
>>>>>>> 4e5ac78c9f5ef47aeaf4b07b9e0921cabe7985cd

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
<<<<<<< HEAD

  constructor() { }

  ngOnInit(): void {

=======
  weather:any 

  constructor(private apiservice:ApiWeatherService) { }

  ngOnInit(): void {
    this.apiservice.getWeather("Raleigh,NC").subscribe((res)=>{
      this.weather = new Object(res);
      console.log(this.weather.data);
    });
>>>>>>> 4e5ac78c9f5ef47aeaf4b07b9e0921cabe7985cd

  }



}
