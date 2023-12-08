import { Injectable } from '@nestjs/common';
import { SwapiService } from 'src/infrastructure/swapi/swapi.service';

@Injectable()
export class PlanetsService {
  constructor(private readonly swapiService: SwapiService) {}

  async findAll() {
    return await this.swapiService.fetchPlanets();
  }

  async findOne(id: number) {
    return await this.swapiService.fetchPlanet(id);
  }
}
