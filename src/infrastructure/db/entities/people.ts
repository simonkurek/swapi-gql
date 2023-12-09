import { People } from 'src/core/peoples/people';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'peoples' })
export class PeopleEntity {
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  height: string;

  @Column({ type: 'varchar', length: 255 })
  mass: string;

  @Column({ type: 'varchar', length: 255 })
  hairColor: string;

  @Column({ type: 'varchar', length: 255 })
  skinColor: string;

  @Column({ type: 'varchar', length: 255 })
  eyeColor: string;

  @Column({ type: 'varchar', length: 255 })
  birthYear: string;

  @Column({ type: 'varchar', length: 255 })
  gender: string;

  @Column({ type: 'varchar', length: 255 })
  homeworld: string; // | Planet;

  @Column({ type: 'simple-array' })
  films: string[]; // | Film[];

  @Column({ type: 'simple-array' })
  species: string[]; // | Specie[];

  @Column({ type: 'simple-array' })
  vehicles: string[]; // | Vehicle[];

  @Column({ type: 'simple-array' })
  starships: string[]; // | Starship[];

  toDomainModel() {
    const people = new People();
    people.name = this.name;
    people.height = this.height;
    people.mass = this.mass;
    people.hairColor = this.hairColor;
    people.skinColor = this.skinColor;
    people.eyeColor = this.eyeColor;
    people.birthYear = this.birthYear;
    people.gender = this.gender;
    people.homeworld = this.homeworld;
    people.films = this.films;
    people.species = this.species;
    people.vehicles = this.vehicles;
    people.starships = this.starships;
    return people;
  }
}
