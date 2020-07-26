import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastListResolverComponent } from './forecast-list-resolver.component';
import { ForecastListResolverRoutingModule } from './forecast-list-resolver-routing.module';
import { ForecastResolver } from '../forecast.resolver';

@NgModule({
  declarations: [ForecastListResolverComponent],
  imports: [CommonModule, ForecastListResolverRoutingModule],
  providers: [ForecastResolver],
})
export class ForecastListResolverModule {}
