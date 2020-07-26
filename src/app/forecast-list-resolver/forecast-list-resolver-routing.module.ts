import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ForecastListResolverComponent } from './forecast-list-resolver.component';
import { ForecastResolver } from '../forecast.resolver';

const routes: Routes = [
  {
    path: '',
    component: ForecastListResolverComponent,
    resolve: { forecast: ForecastResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForecastListResolverRoutingModule {}
