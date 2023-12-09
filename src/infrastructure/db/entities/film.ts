import { Film } from 'src/core/films/film';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'films' })
export class FilmEntity {
  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'int', primary: true })
  episodeId: string;

  @Column({ type: 'text' })
  openingCrawl: string;

  @Column({ type: 'varchar', length: 255 })
  director: string;

  @Column({ type: 'varchar', length: 255 })
  producer: string;

  @Column({ type: 'string' })
  releaseDate: string;

  @Column({ type: 'simple-array' })
  characters: string[]; // | People[];

  @Column({ type: 'simple-array' })
  planets: string[]; // | Planet[];

  @Column({ type: 'simple-array' })
  starships: string[]; // | Starship[];

  @Column({ type: 'simple-array' })
  vehicles: string[]; // | Vehicle[];

  @Column({ type: 'simple-array' })
  species: string[]; // | Specie[];

  toDomainModel() {
    const film = new Film();
    film.title = this.title;
    film.episodeId = this.episodeId;
    film.openingCrawl = this.openingCrawl;
    film.director = this.director;
    film.producer = this.producer;
    film.releaseDate = this.releaseDate;
    film.characters = this.characters;
    film.planets = this.planets;
    film.starships = this.starships;
    film.vehicles = this.vehicles;
    film.species = this.species;
    return film;
  }
}
