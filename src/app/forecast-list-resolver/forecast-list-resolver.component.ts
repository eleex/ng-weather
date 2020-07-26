import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForecastWeather } from '../models/forecast-weather.model';

@Component({
  selector: 'app-forecast-list-resolver',
  templateUrl: './forecast-list-resolver.component.html',
  styleUrls: ['./forecast-list-resolver.component.scss'],
})
export class ForecastListResolverComponent implements OnInit {
  forecastWeather: ForecastWeather;
  city: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => (this.city = params.city));

    this.route.data.subscribe((data) => {
      this.forecastWeather = data.forecast;
    });
  }
}
