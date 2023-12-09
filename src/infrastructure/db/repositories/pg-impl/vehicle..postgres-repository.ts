import { VehicleRepository } from '../interfaces/vehicle.repository';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { VehicleEntity } from '../../entities/vehicle';
import { Vehicle } from 'src/core/vehicles/vehicle';
import { Injectable } from '@nestjs/common';

@Injectable()
export class VehicleRepositoryPgImpl implements VehicleRepository {
  constructor(
    @InjectRepository(VehicleEntity)
    private readonly vehicleRepository: Repository<VehicleEntity>,
  ) {}

  async getAll(): Promise<Vehicle[]> {
    const vehicleEntities = await this.vehicleRepository.find();
    return vehicleEntities.map((vehicleEntity) =>
      vehicleEntity.toDomainModel(),
    );
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getById(id: number): Promise<Vehicle> {
    throw new Error('Method not implemented.');
  }
}
