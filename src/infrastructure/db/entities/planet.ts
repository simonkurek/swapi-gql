import { Planet } from '../../../core/planets/planet';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'planets' })
export class PlanetEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  rotationPeriod: string;

  @Column({ type: 'varchar', length: 255 })
  orbitalPeriod: string;

  @Column({ type: 'varchar', length: 255 })
  diameter: string;

  @Column({ type: 'varchar', length: 255 })
  climate: string;

  @Column({ type: 'varchar', length: 255 })
  gravity: string;

  @Column({ type: 'varchar', length: 255 })
  terrain: string;

  @Column({ type: 'varchar', length: 255 })
  surfaceWater: string;

  @Column({ type: 'varchar', length: 255 })
  population: string;

  @Column({ type: 'simple-array' })
  residents: string[]; // | People[];

  @Column({ type: 'simple-array' })
  films: string[]; // | Film[];

  @Column({ type: 'bigint' })
  savetime: number;

  toDomainModel() {
    const planet = new Planet();
    planet.name = this.name;
    planet.rotationPeriod = this.rotationPeriod;
    planet.orbitalPeriod = this.orbitalPeriod;
    planet.diameter = this.diameter;
    planet.climate = this.climate;
    planet.gravity = this.gravity;
    planet.terrain = this.terrain;
    planet.surfaceWater = this.surfaceWater;
    planet.population = this.population;
    planet.residents = this.residents;
    planet.films = this.films;
    return planet;
  }
}
