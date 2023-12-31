import { Film } from '../../../../core/films/film';

export interface FilmRepository {
  getAll(): Promise<Film[]>;
  getById(id: number): Promise<Film>;
  update(data: Film[]): Promise<void>;
}
