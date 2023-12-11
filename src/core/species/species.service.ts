import { Inject, Injectable } from '@nestjs/common';
import { SpecieRepository } from '../../infrastructure/db/repositories/interfaces/specie.repository';
import { SwapiService } from '../../infrastructure/swapi/swapi.service';
import { isCacheValid } from '../cache.logic';

@Injectable()
export class SpeciesService {
  constructor(
    private readonly swapiService: SwapiService,
    @Inject('SpecieRepository')
    private readonly specieRepository: SpecieRepository,
  ) {}

  async findAll() {
    const species = await this.specieRepository.getAll();
    if (isCacheValid(species)) return species;
    const newSpecies = await this.swapiService.fetchSpecies();
    await this.specieRepository.update(newSpecies);
    return newSpecies;
  }

  async findOne(id: number) {
    return await this.swapiService.fetchSpecie(id);
  }
}
