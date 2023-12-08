import { People } from '../peoples/people';
import { Planet } from '../planets/planet';
import { Specie } from '../species/specie';
import { Starship } from '../starships/starship';
import { Vehicle } from '../vehicles/vehicle';
import { SwapiVO } from '../vo/swapi.vo';

export class FilmFactory {
  static createFilm(film: Film): Film {
    return Object.assign(new Film(), film);
  }

  static createFilms(films: Film[]): Film[] {
    return films.map((film) => FilmFactory.createFilm(film));
  }
}

export class Film extends SwapiVO {
  constructor() {
    super();
  }

  title: string;
  episode_id: string;
  opening_crawl: string;
  director: string;
  producer: string;
  // release_date: Date;
  release_date: string;
  characters: string[] | People[];
  planets: string[] | Planet[];
  starships: string[] | Starship[];
  vehicles: string[] | Vehicle[];
  species: string[] | Specie[];
}
