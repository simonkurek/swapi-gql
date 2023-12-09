import { Film } from 'src/core/films/film';

export interface FilmRepository {
  getAll(): Promise<Film[]>;
  getById(id: number): Promise<Film>;
}
