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

  findOne(id: number) {
    return `This action returns a #${id} film`;
  }
}
