import { Component, OnInit } from '@angular/core';
import { ApiWeatherService } from "../api-weather.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  weather:any 

  constructor(private apiservice:ApiWeatherService) { }

  ngOnInit(): void {
    this.apiservice.getWeather("Raleigh,NC").subscribe((res)=>{
      this.weather = new Object(res);
      console.log(this.weather.data);
    });

  }



}
