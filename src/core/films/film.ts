import { People } from '../peoples/people';
import { Planet } from '../planets/planet';
import { Specie } from '../species/specie';
import { Starship } from '../starships/starship';
import { Vehicle } from '../vehicles/vehicle';

export type Film = {
  // common data
  title: string;
  episode_id: string;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: Date;
  characters: string[] | People[];
  planets: string[] | Planet[];
  starships: string[] | Starship[];
  vehicles: string[] | Vehicle[];
  species: string[] | Specie[];
  // swapi original data
  created: Date;
  edited: Date;
  url: string;
  // swapi-gql
  savetime: Date;
};
