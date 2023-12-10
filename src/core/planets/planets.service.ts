import { Inject, Injectable } from '@nestjs/common';
import { PlanetRepository } from 'src/infrastructure/db/repositories/interfaces/planet.repository';
import { SwapiService } from 'src/infrastructure/swapi/swapi.service';
import { isCacheValid } from '../cache.logic';

@Injectable()
export class PlanetsService {
  constructor(
    private readonly swapiService: SwapiService,
    @Inject('PlanetRepository')
    private readonly planetRepository: PlanetRepository,
  ) {}

  async findAll() {
    const planets = await this.planetRepository.getAll();
    if (isCacheValid(planets)) return planets;
    const newPlanets = await this.swapiService.fetchPlanets();
    await this.planetRepository.update(newPlanets);
    return newPlanets;
  }

  async findOne(id: number) {
    return await this.swapiService.fetchPlanet(id);
  }
}
