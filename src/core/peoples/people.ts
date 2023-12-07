import { Film } from '../films/film';
import { Planet } from '../planets/planet';
import { Specie } from '../species/specie';
import { Starship } from '../starships/starship';
import { Vehicle } from '../vehicles/vehicle';

export type People = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string | Planet;
  films: string[] | Film[];
  species: string[] | Specie[];
  vehicles: string[] | Vehicle[];
  starships: string[] | Starship[];
  // swapi original data
  created: Date;
  edited: Date;
  url: string;
  // swapi-gql
  savetime: Date;
};
