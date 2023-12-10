import { Film } from '../films/film';
import { People } from '../peoples/people';
import { Planet } from '../planets/planet';
import { SwapiVO } from '../vo/swapi.vo';

export class Specie extends SwapiVO {
  constructor() {
    super();
  }

  name: string;
  classification: string;
  designation: string;
  averageHeight: string;
  skinColors: string;
  hairColors: string;
  eyeColors: string;
  averageLifespan: string;
  homeworld: string | Planet;
  language: string;
  people: string[] | People[];
  films: string[] | Film[];
}
