import { Starship } from '../../../core/starships/starship';

export type SwapiStarship = {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: string[];
  films: string[];
};

export const starshipFactory = (data: SwapiStarship): Starship => {
  const starship = new Starship();
  starship.name = data.name;
  starship.model = data.model;
  starship.manufacturer = data.manufacturer;
  starship.costInCredits = data.cost_in_credits;
  starship.length = data.length;
  starship.maxAtmospheringSpeed = data.max_atmosphering_speed;
  starship.crew = data.crew;
  starship.passengers = data.passengers;
  starship.cargoCapacity = data.cargo_capacity;
  starship.consumables = data.consumables;
  starship.hyperdriveRating = data.hyperdrive_rating;
  starship.MGLT = data.MGLT;
  starship.starshipClass = data.starship_class;
  starship.pilots = data.pilots;
  starship.films = data.films;
  return starship;
};
