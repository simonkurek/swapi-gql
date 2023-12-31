import { People } from '../../../../core/peoples/people';
import { PeopleRepository } from '../interfaces/people.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PeopleEntity } from '../../entities/people';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PeopleRepositoryPgImpl implements PeopleRepository {
  constructor(
    @InjectRepository(PeopleEntity)
    private readonly peopleRepository: Repository<PeopleEntity>,
  ) {}

  async getAll(): Promise<People[]> {
    const peopleEntities = await this.peopleRepository.find();
    return peopleEntities.map((peopleEntity) => peopleEntity.toDomainModel());
  }
  async getById(id: number): Promise<People> {
    const peopleEntity = await this.peopleRepository.findOneByOrFail({ id });
    return peopleEntity.toDomainModel();
  }

  async update(data: People[]): Promise<void> {
    await this.removeAll();
    const filmEntities = data as PeopleEntity[];
    await this.peopleRepository.save(filmEntities);
  }

  private async removeAll(): Promise<void> {
    await this.peopleRepository.clear();
  }
}
