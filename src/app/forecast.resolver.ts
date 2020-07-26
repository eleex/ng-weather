import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ForecastWeather } from './models/forecast-weather.model';
import { WeatherService } from './services/weather.service';

@Injectable({ providedIn: 'root' })
export class ForecastResolver implements Resolve<ForecastWeather[]> {
  constructor(private weatherService: WeatherService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<ForecastWeather[]>
    | Promise<ForecastWeather[]>
    | ForecastWeather[] {
    return this.weatherService.getForecastWeather(route.queryParams.city);
  }
}
