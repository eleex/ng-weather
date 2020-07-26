import { Description } from './description.model';

export interface Weather {
  city: string;
  description: string;
  weatherImg: string;
  weather: Description[];
}
