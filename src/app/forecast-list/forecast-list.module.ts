import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastListComponent } from './forecast-list.component';
import { ForecastListRoutingModule } from './forecast-list-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ForecastListComponent],
  imports: [CommonModule, ForecastListRoutingModule, SharedModule],
  exports: [],
  providers: [],
})
export class ForecastListModule {}
