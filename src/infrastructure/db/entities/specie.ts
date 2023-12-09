import { Specie } from 'src/core/species/specie';
import { Column, Entity } from 'typeorm';

@Entity()
export class SpecieEntity {
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  classification: string;

  @Column({ type: 'varchar', length: 255 })
  designation: string;

  @Column({ type: 'varchar', length: 255 })
  averageHeight: string;

  @Column({ type: 'varchar', length: 255 })
  skinColors: string;

  @Column({ type: 'varchar', length: 255 })
  hairColors: string;

  @Column({ type: 'varchar', length: 255 })
  eyeColors: string;

  @Column({ type: 'varchar', length: 255 })
  averageLifespan: string;

  @Column({ type: 'varchar', length: 255 })
  homeworld: string; // | Planet;

  @Column({ type: 'varchar', length: 255 })
  language: string;

  @Column({ type: 'simple-array' })
  people: string[]; // | People[];

  @Column({ type: 'simple-array' })
  films: string[]; // | Film[];

  toDomainModel() {
    const specie = new Specie();
    specie.name = this.name;
    specie.classification = this.classification;
    specie.designation = this.designation;
    specie.averageHeight = this.averageHeight;
    specie.skinColors = this.skinColors;
    specie.hairColors = this.hairColors;
    specie.eyeColors = this.eyeColors;
    specie.averageLifespan = this.averageLifespan;
    specie.homeworld = this.homeworld;
    specie.language = this.language;
    specie.people = this.people;
    specie.films = this.films;
    return specie;
  }
}
