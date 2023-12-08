import { Injectable } from '@nestjs/common';
import { SwapiService } from 'src/infrastructure/swapi/swapi.service';

@Injectable()
export class VehiclesService {
  constructor(private readonly swapiService: SwapiService) {}

  async findAll() {
    return await this.swapiService.fetchVehicles();
  }

  async findOne(id: number) {
    return await this.swapiService.fetchVehicle(id);
  }
}
