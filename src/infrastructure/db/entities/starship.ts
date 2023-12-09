import { Starship } from 'src/core/starships/starship';
import { Column, Entity } from 'typeorm';

@Entity()
export class StarshipEntity {
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
  hyperdriveRating: string;

  @Column({ type: 'varchar', length: 255 })
  MGLT: string;

  @Column({ type: 'varchar', length: 255 })
  starshipClass: string;

  @Column({ type: 'simple-array' })
  pilots: string[]; // | People[];

  @Column({ type: 'simple-array' })
  films: string[]; // | Film[];

  toDomainModel() {
    const starship = new Starship();
    starship.name = this.name;
    starship.model = this.model;
    starship.manufacturer = this.manufacturer;
    starship.costInCredits = this.costInCredits;
    starship.length = this.length;
    starship.maxAtmospheringSpeed = this.maxAtmospheringSpeed;
    starship.crew = this.crew;
    starship.passengers = this.passengers;
    starship.cargoCapacity = this.cargoCapacity;
    starship.consumables = this.consumables;
    starship.hyperdriveRating = this.hyperdriveRating;
    starship.MGLT = this.MGLT;
    starship.starshipClass = this.starshipClass;
    starship.pilots = this.pilots;
    starship.films = this.films;
    return starship;
  }
}
