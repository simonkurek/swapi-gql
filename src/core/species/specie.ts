import { Film } from '../films/film';
import { People } from '../peoples/people';
import { Planet } from '../planets/planet';

export type Specie = {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  homeworld: string | Planet;
  language: string;
  people: string[] | People[];
  films: string[] | Film[];
  // swapi original data
  created: Date;
  edited: Date;
  url: string;
  // swapi-gql
  savetime: Date;
};
