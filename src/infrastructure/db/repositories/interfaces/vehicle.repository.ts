import { Vehicle } from 'src/core/vehicles/vehicle';

export interface VehicleRepository {
  getAll(): Promise<Vehicle[]>;
  getById(id: number): Promise<Vehicle>;
}
