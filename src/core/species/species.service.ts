import { Injectable } from '@nestjs/common';
import { SwapiService } from 'src/infrastructure/swapi/swapi.service';

@Injectable()
export class SpeciesService {
  constructor(private readonly swapiService: SwapiService) {}

  async findAll() {
    return await this.swapiService.fetchSpecies();
  }

  async findOne(id: number) {
    return await this.swapiService.fetchSpecie(id);
  }
}
