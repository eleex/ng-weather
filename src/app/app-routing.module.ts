import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { ForecastListResolverComponent } from './forecast-list-resolver/forecast-list-resolver.component';
import { ForecastResolver } from './forecast.resolver';

const routes: Routes = [
  { path: '', component: CurrentWeatherComponent, pathMatch: 'full' },
  {
    path: 'forecast',
    loadChildren: () =>
      import('./forecast-list/forecast-list.module').then(
        (m) => m.ForecastListModule
      ),
  },
  {
    path: 'forecast-resolver',
    loadChildren: () =>
      import('./forecast-list-resolver/forecast-list-resolver.module').then(
        (m) => m.ForecastListResolverModule
      ),
  },
  { path: 'error', component: ErrorPageComponent },
  { path: '**', redirectTo: '/error' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
