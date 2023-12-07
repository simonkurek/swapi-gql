import { Film } from '../films/film';
import { People } from '../peoples/people';

export type Planet = {
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
  // swapi original data
  created: Date;
  edited: Date;
  url: string;
  // swapi-gql
  savetime: Date;
};
