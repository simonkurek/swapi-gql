import { People } from 'src/core/peoples/people';

export type SwapiPeople = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
};

export const peopleFactory = (data: SwapiPeople): People => {
  const people = new People();
  people.name = data.name;
  people.height = data.height;
  people.mass = data.mass;
  people.hairColor = data.hair_color;
  people.skinColor = data.skin_color;
  people.eyeColor = data.eye_color;
  people.birthYear = data.birth_year;
  people.gender = data.gender;
  people.homeworld = data.homeworld;
  people.films = data.films;
  people.species = data.species;
  people.vehicles = data.vehicles;
  people.starships = data.starships;
  return people;
};
