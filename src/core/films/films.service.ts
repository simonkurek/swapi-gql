import { Injectable } from '@nestjs/common';
import { SwapiService } from 'src/infrastructure/swapi/swapi.service';

@Injectable()
export class FilmsService {
  constructor(private readonly swapiService: SwapiService) {}

  async findAll() {
    const films = await this.swapiService.fetchFilms();
    console.log(films);
    return films;
  }

  async findOne(id: number) {
    return await this.swapiService.fetchFilm(id);
  }
}
