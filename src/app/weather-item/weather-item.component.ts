import { Component, OnInit, Input } from '@angular/core';
import { Description } from '../models/description.model';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.scss'],
})
export class WeatherItemComponent implements OnInit {
  @Input() item: Description;

  constructor() {}

  ngOnInit(): void {}
}
