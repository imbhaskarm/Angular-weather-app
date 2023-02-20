import { Component,OnInit} from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  

  
  

  constructor(private weatherService:WeatherService){}
  
  cityName:string='london';
  weatherData?: WeatherData;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName='';
  }

  convert(temp:number):string
  {
    temp=(temp-32)*5/9;
    return temp.toString();
  }

  onSubmit()
  {
    // console.log("wdeafedf");
    this.getWeatherData(this.cityName);
    this.cityName='';
  }

  private getWeatherData(cityName:string)
  { 
    this.weatherService.getWeatherData(cityName)
     .subscribe({
      next:(response)=>
      {
        this.weatherData=response;
        console.log(response);
      }
     });
  }


  title = 'weatherApp';
}
