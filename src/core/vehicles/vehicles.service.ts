import { Inject, Injectable } from '@nestjs/common';
import { VehicleRepository } from '../../infrastructure/db/repositories/interfaces/vehicle.repository';
import { SwapiService } from '../../infrastructure/swapi/swapi.service';
import { isCacheValid } from '../cache.logic';

@Injectable()
export class VehiclesService {
  constructor(
    private readonly swapiService: SwapiService,
    @Inject('VehicleRepository')
    private readonly vehicleRepository: VehicleRepository,
  ) {}

  async findAll() {
    const vehicles = await this.vehicleRepository.getAll();
    if (isCacheValid(vehicles)) return vehicles;
    const newVehicles = await this.swapiService.fetchVehicles();
    await this.vehicleRepository.update(newVehicles);
    return newVehicles;
  }

  async findOne(id: number) {
    return await this.swapiService.fetchVehicle(id);
  }
}
