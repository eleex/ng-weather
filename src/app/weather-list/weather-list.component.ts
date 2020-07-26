import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { Weather } from '../models/weather.model';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.scss'],
})
export class WeatherListComponent implements OnInit, OnDestroy {
  currentWeather: Weather = null;
  loading = false;
  error: string = null;
  weatherSub: Subscription;
  loadingSub: Subscription;
  errorSub: Subscription;

  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.weatherSub = this.weatherService.currentWeather.subscribe({
      next: (data: Weather) => {
        this.currentWeather = data;
        this.loading = false;
      },
    });

    this.loadingSub = this.weatherService.loading.subscribe({
      next: (v: boolean) => {
        this.loading = v;
      },
    });

    this.loadingSub = this.weatherService.error.subscribe({
      next: (v: string) => {
        this.error = v;
      },
    });

    this.route.queryParams.subscribe((params) => {
      if (params.city) {
        this.loading = true;
        this.weatherService
          .getCurrentWeather(params.city)
          .subscribe((weather) => {
            this.loading = false;
            this.currentWeather = weather;
          });
      }
    });
  }

  ngOnDestroy(): void {
    if (this.weatherSub) {
      this.weatherSub.unsubscribe();
    }
    if (this.loadingSub) {
      this.loadingSub.unsubscribe();
    }
    if (this.errorSub) {
      this.errorSub.unsubscribe();
    }
  }
}
