import { Film } from '../../../core/films/film';

export type SwapiFilm = {
  title: string;
  episode_id: string;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
};

// create Film factory that transfers this type of data to the film.ts class from core/ folder

export const filmFactory = (data: SwapiFilm): Film => {
  const film = new Film();
  film.title = data.title;
  film.episodeId = data.episode_id;
  film.openingCrawl = data.opening_crawl;
  film.director = data.director;
  film.producer = data.producer;
  film.releaseDate = data.release_date;
  film.characters = data.characters;
  film.planets = data.planets;
  film.starships = data.starships;
  film.vehicles = data.vehicles;
  film.species = data.species;
  return film;
};
