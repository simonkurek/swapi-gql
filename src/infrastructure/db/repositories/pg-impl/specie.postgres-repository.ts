import { Specie } from '../../../../core/species/specie';
import { SpecieRepository } from '../interfaces/specie.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SpecieEntity } from '../../entities/specie';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SpeciePostgresPgImpl implements SpecieRepository {
  constructor(
    @InjectRepository(SpecieEntity)
    private readonly specieRepository: Repository<SpecieEntity>,
  ) {}

  async getAll(): Promise<Specie[]> {
    const specieEntities = await this.specieRepository.find();
    return specieEntities.map((specieEntity) => specieEntity.toDomainModel());
  }

  async getById(id: number): Promise<Specie> {
    const specieEntity = await this.specieRepository.findOneByOrFail({ id });
    return specieEntity.toDomainModel();
  }

  async update(data: Specie[]): Promise<void> {
    await this.removeAll();
    const filmEntities = data as SpecieEntity[];
    await this.specieRepository.save(filmEntities);
  }

  private async removeAll(): Promise<void> {
    await this.specieRepository.clear();
  }
}
