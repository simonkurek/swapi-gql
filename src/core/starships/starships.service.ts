import { Inject, Injectable } from '@nestjs/common';
import { StarshipRepository } from 'src/infrastructure/db/repositories/interfaces/starship.repository';
import { SwapiService } from 'src/infrastructure/swapi/swapi.service';
import { isCacheValid } from '../cache.logic';

@Injectable()
export class StarshipsService {
  constructor(
    private readonly swapiService: SwapiService,
    @Inject('StarshipRepository')
    private readonly starshipRepository: StarshipRepository,
  ) {}

  async findAll() {
    const starships = await this.starshipRepository.getAll();
    if (isCacheValid(starships)) return starships;
    const newStarships = await this.swapiService.fetchStarships();
    await this.starshipRepository.update(newStarships);
    return newStarships;
  }

  async findOne(id: number) {
    return await this.swapiService.fetchStarship(id);
  }
}
