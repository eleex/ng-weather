import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../services/weather.service';
import { ForecastWeather } from '../models/forecast-weather.model';

@Component({
  selector: 'app-forecast-list',
  templateUrl: './forecast-list.component.html',
  styleUrls: ['./forecast-list.component.scss'],
})
export class ForecastListComponent implements OnInit {
  city = '';
  forecastWeather: ForecastWeather[];
  loading = false;
  error: string = null;

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.city = params.city;
      this.loading = true;
      this.weatherService.getForecastWeather(this.city).subscribe(
        (data) => {
          this.forecastWeather = data;
          this.loading = false;
        },
        (error) => {
          this.error = error.error.message;
          console.log(this.error);
        }
      );
    });
  }
}
