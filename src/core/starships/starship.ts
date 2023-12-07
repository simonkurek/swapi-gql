import { Film } from '../films/film';
import { People } from '../peoples/people';

export type Starship = {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: string[] | People[];
  films: string[] | Film[];
  // swapi original data
  created: Date;
  edited: Date;
  url: string;
  // swapi-gql
  savetime: Date;
};
