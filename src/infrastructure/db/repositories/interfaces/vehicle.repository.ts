import { Vehicle } from '../../../../core/vehicles/vehicle';

export interface VehicleRepository {
  getAll(): Promise<Vehicle[]>;
  getById(id: number): Promise<Vehicle>;
  update(data: Vehicle[]): Promise<void>;
}
