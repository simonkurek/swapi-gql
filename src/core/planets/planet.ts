import { Film } from '../films/film';
import { People } from '../peoples/people';
import { SwapiVO } from '../vo/swapi.vo';

export class Planet extends SwapiVO {
  name: string;
  rotationPeriod: string;
  orbitalPeriod: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surfaceWater: string;
  population: string;
  residents: string[] | People[];
  films: string[] | Film[];
}
