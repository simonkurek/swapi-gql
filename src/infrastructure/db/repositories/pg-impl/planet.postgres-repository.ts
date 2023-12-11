import { Planet } from '../../../../core/planets/planet';
import { PlanetRepository } from '../interfaces/planet.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlanetEntity } from '../../entities/planet';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PlanetRepositoryPgImpl implements PlanetRepository {
  constructor(
    @InjectRepository(PlanetEntity)
    private readonly planetRepository: Repository<PlanetEntity>,
  ) {}
  async getAll(): Promise<Planet[]> {
    const planetEntities = await this.planetRepository.find();
    return planetEntities.map((planetEntity) => planetEntity.toDomainModel());
  }

  async getById(id: number): Promise<Planet> {
    const planetEntity = await this.planetRepository.findOneByOrFail({ id });
    return planetEntity.toDomainModel();
  }

  async update(data: Planet[]): Promise<void> {
    await this.removeAll();
    const filmEntities = data as PlanetEntity[];
    await this.planetRepository.save(filmEntities);
  }

  private async removeAll(): Promise<void> {
    await this.planetRepository.clear();
  }
}
