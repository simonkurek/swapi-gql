import { Film } from '../films/film';
import { Planet } from '../planets/planet';
import { Specie } from '../species/specie';
import { Starship } from '../starships/starship';
import { Vehicle } from '../vehicles/vehicle';
import { SwapiVO } from '../vo/swapi.vo';

export class People extends SwapiVO {
  constructor() {
    super();
  }

  name: string;
  height: string;
  mass: string;
  hairColor: string;
  skinColor: string;
  eyeColor: string;
  birthYear: string;
  gender: string;
  homeworld: string | Planet;
  films: string[] | Film[];
  species: string[] | Specie[];
  vehicles: string[] | Vehicle[];
  starships: string[] | Starship[];
}
