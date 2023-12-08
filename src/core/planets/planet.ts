import { Film } from '../films/film';
import { People } from '../peoples/people';
import { SwapiVO } from '../vo/swapi.vo';

export class Planet extends SwapiVO {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[] | People[];
  films: string[] | Film[];
}
