import { Injectable } from '@nestjs/common';
import { SwapiService } from 'src/infrastructure/swapi/swapi.service';

@Injectable()
export class StarshipsService {
  constructor(private readonly swapiService: SwapiService) {}

  async findAll() {
    return await this.swapiService.fetchStarships();
  }

  async findOne(id: number) {
    return await this.swapiService.fetchStarship(id);
  }
}
