import { Inject, Injectable } from '@nestjs/common';
import { FilmRepository } from 'src/infrastructure/db/repositories/interfaces/film.repository';
import { SwapiService } from 'src/infrastructure/swapi/swapi.service';

@Injectable()
export class FilmsService {
  constructor(
    private readonly swapiService: SwapiService,
    @Inject('FilmRepository')
    private readonly filmRepository: FilmRepository,
  ) {}

  async findAll() {
    const films = await this.filmRepository.getAll();
    // const newfilms = await this.swapiService.fetchFilms();
    console.log(films);
    return films;
  }

  async findOne(id: number) {
    return await this.swapiService.fetchFilm(id);
  }
}
