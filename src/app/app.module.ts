import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { WeatherItemComponent } from './weather-item/weather-item.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { ForecastListModule } from './forecast-list/forecast-list.module';
import { SharedModule } from './shared/shared.module';
import { ForecastListResolverModule } from './forecast-list-resolver/forecast-list-resolver.module';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    WeatherListComponent,
    WeatherItemComponent,
    ErrorPageComponent,
    CurrentWeatherComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ForecastListModule,
    ForecastListResolverModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
