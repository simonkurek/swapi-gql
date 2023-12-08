import { Film } from '../films/film';
import { People } from '../peoples/people';
import { Planet } from '../planets/planet';
import { SwapiVO } from '../vo/swapi.vo';

export class Specie extends SwapiVO {
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
}
