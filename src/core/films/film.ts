import { People } from '../peoples/people';
import { Planet } from '../planets/planet';
import { Specie } from '../species/specie';
import { Starship } from '../starships/starship';
import { Vehicle } from '../vehicles/vehicle';
import { SwapiVO } from '../vo/swapi.vo';

export class Film extends SwapiVO {
  constructor() {
    super();
  }

  title: string;
  episodeId: string;
  openingCrawl: string;
  director: string;
  producer: string;
  releaseDate: string;
  characters: string[] | People[];
  planets: string[] | Planet[];
  starships: string[] | Starship[];
  vehicles: string[] | Vehicle[];
  species: string[] | Specie[];
}
