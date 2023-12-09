import { Vehicle } from 'src/core/vehicles/vehicle';
import { Column, Entity } from 'typeorm';

@Entity()
export class VehicleEntity {
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  model: string;

  @Column({ type: 'varchar', length: 255 })
  manufacturer: string;

  @Column({ type: 'varchar', length: 255 })
  costInCredits: string;

  @Column({ type: 'varchar', length: 255 })
  length: string;

  @Column({ type: 'varchar', length: 255 })
  maxAtmospheringSpeed: string;

  @Column({ type: 'varchar', length: 255 })
  crew: string;

  @Column({ type: 'varchar', length: 255 })
  passengers: string;

  @Column({ type: 'varchar', length: 255 })
  cargoCapacity: string;

  @Column({ type: 'varchar', length: 255 })
  consumables: string;

  @Column({ type: 'varchar', length: 255 })
  vehicleClass: string;

  @Column({ type: 'simple-array' })
  pilots: string[]; // | People[];

  @Column({ type: 'simple-array' })
  films: string[]; // | Film[];

  toDomainModel() {
    const vehicle = new Vehicle();
    vehicle.name = this.name;
    vehicle.model = this.model;
    vehicle.manufacturer = this.manufacturer;
    vehicle.costInCredits = this.costInCredits;
    vehicle.length = this.length;
    vehicle.maxAtmospheringSpeed = this.maxAtmospheringSpeed;
    vehicle.crew = this.crew;
    vehicle.passengers = this.passengers;
    vehicle.cargoCapacity = this.cargoCapacity;
    vehicle.consumables = this.consumables;
    vehicle.vehicleClass = this.vehicleClass;
    vehicle.pilots = this.pilots;
    vehicle.films = this.films;
    return vehicle;
  }
}
