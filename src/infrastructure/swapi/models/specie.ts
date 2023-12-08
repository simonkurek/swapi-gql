import { Specie } from 'src/core/species/specie';

export type SwapiSpecie = {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  homeworld: string;
  language: string;
  people: string[];
  films: string[];
};

export const specieFactory = (data: SwapiSpecie): Specie => {
  const specie = new Specie();
  specie.name = data.name;
  specie.classification = data.classification;
  specie.designation = data.designation;
  specie.averageHeight = data.average_height;
  specie.skinColors = data.skin_colors;
  specie.hairColors = data.hair_colors;
  specie.eyeColors = data.eye_colors;
  specie.averageLifespan = data.average_lifespan;
  specie.homeworld = data.homeworld;
  specie.language = data.language;
  specie.people = data.people;
  specie.films = data.films;
  return specie;
};
