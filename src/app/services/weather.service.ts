import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Weather } from '../models/weather.model';
import { ForecastWeather } from '../models/forecast-weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  loading = new Subject<boolean>();
  error = new Subject<string>();
  currentWeather = new Subject<Weather>();
  forecastWeather = new Subject<ForecastWeather[]>();

  constructor(private http: HttpClient) {}

  getCurrentWeather(city: string): Observable<Weather> {
    const params = new HttpParams()
      .set('appid', '8a9238f7118a7ebc926a12bc8101dfe5')
      .set('units', 'metric')
      .set('lang', 'ru');

    return this.http
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}`, {
        params,
      })
      .pipe(
        delay(1000),
        map((data) => {
          const weather: Weather = {
            city: data['name'],
            description: data['weather'][0]['description'],
            weatherImg: `https://openweathermap.org/img/w/${data['weather'][0]['icon']}.png`,
            weather: [
              {
                description: 'Температура',
                value: `${Math.round(data['main']['temp'])} ℃`,
              },
              {
                description: 'Давление',
                value: `${data['main']['pressure']} ㍱`,
              },
              {
                description: 'Влажность',
                value: `${data['main']['humidity']} %`,
              },
              { description: 'Ветер', value: `${data['wind']['speed']} ㎧` },
            ],
          };
          return weather;
        })
      );
  }

  getForecastWeather(city: string): Observable<ForecastWeather[]> {
    const params = new HttpParams()
      .set('appid', '8a9238f7118a7ebc926a12bc8101dfe5')
      .set('units', 'metric')
      .set('lang', 'ru');

    return this.http
      .get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}`, {
        params,
      })
      .pipe(
        delay(1500),
        map((data) => {
          const dataList = data['list'];
          const forecastWeather: ForecastWeather[] = dataList.map((weather) => {
            return {
              time: new Date(weather.dt * 1000),
              temp: Math.round(weather.main.temp),
              pressure: weather.main.pressure,
              humidity: weather.main.humidity,
              wind: Math.round(weather.wind.speed),
              weatherDescription: weather.weather[0].description,
              weatherIcon: `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`,
            };
          });

          return forecastWeather;
        })
      );
  }
}
