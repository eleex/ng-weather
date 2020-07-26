import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  city = '';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}

  getWeather(): void {
    this.weatherService.currentWeather.next(null);
    this.weatherService.error.next(null);
    this.weatherService.loading.next(true);
    this.weatherService.getCurrentWeather(this.city).subscribe(
      (data) => {
        this.weatherService.currentWeather.next(data);
        this.city = '';
      },
      (error) => {
        this.weatherService.error.next(error.error.message);
        this.weatherService.loading.next(false);
      }
    );
  }
}
