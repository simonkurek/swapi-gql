import { Film } from '../films/film';
import { People } from '../peoples/people';
import { SwapiVO } from '../vo/swapi.vo';

export class Starship extends SwapiVO {
  constructor() {
    super();
  }

  name: string;
  model: string;
  manufacturer: string;
  costInCredits: string;
  length: string;
  maxAtmospheringSpeed: string;
  crew: string;
  passengers: string;
  cargoCapacity: string;
  consumables: string;
  hyperdriveRating: string;
  MGLT: string;
  starshipClass: string;
  pilots: string[] | People[];
  films: string[] | Film[];
}
