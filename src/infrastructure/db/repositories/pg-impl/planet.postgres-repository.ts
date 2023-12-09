import { Planet } from 'src/core/planets/planet';
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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getById(id: number): Promise<Planet> {
    throw new Error('Method not implemented.');
  }
}