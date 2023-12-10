import { Inject, Injectable } from '@nestjs/common';
import { FilmRepository } from 'src/infrastructure/db/repositories/interfaces/film.repository';
import { SwapiService } from 'src/infrastructure/swapi/swapi.service';
import { isCacheValid } from '../cache.logic';

@Injectable()
export class FilmsService {
  constructor(
    private readonly swapiService: SwapiService,
    @Inject('FilmRepository')
    private readonly filmRepository: FilmRepository,
  ) {}

  async findAll() {
    const films = await this.filmRepository.getAll();
    if (isCacheValid(films)) return films;
    const newFilms = await this.swapiService.fetchFilms();
    await this.filmRepository.update(newFilms);
    return newFilms;
  }

  async findOne(id: number) {
    return await this.swapiService.fetchFilm(id);
  }
}
