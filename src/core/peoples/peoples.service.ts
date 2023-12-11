import { Inject, Injectable } from '@nestjs/common';
import { PeopleRepository } from '../../infrastructure/db/repositories/interfaces/people.repository';
import { SwapiService } from '../../infrastructure/swapi/swapi.service';
import { isCacheValid } from '../cache.logic';

@Injectable()
export class PeoplesService {
  constructor(
    private readonly swapiService: SwapiService,
    @Inject('PeopleRepository')
    private readonly peopleRepository: PeopleRepository,
  ) {}

  async findAll() {
    const peoples = await this.peopleRepository.getAll();
    if (isCacheValid(peoples)) return peoples;
    const newPeoples = await this.swapiService.fetchPeoples();
    await this.peopleRepository.update(newPeoples);
    return newPeoples;
  }

  async findOne(id: number) {
    return await this.swapiService.fetchPeople(id);
  }
}
