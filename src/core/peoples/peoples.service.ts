import { Injectable } from '@nestjs/common';
import { SwapiService } from 'src/infrastructure/swapi/swapi.service';

@Injectable()
export class PeoplesService {
  constructor(private readonly swapiService: SwapiService) {}

  async findAll() {
    return await this.swapiService.fetchPeoples();
  }

  async findOne(id: number) {
    return await this.swapiService.fetchPeople(id);
  }
}
