import { Vehicle } from 'src/core/vehicles/vehicle';

export type SwapiVehicle = {
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
  vehicle_class: string;
  pilots: string[];
  films: string[];
};

export const vehicleFactory = (data: SwapiVehicle): Vehicle => {
  const vehicle = new Vehicle();
  vehicle.name = data.name;
  vehicle.model = data.model;
  vehicle.manufacturer = data.manufacturer;
  vehicle.costInCredits = data.cost_in_credits;
  vehicle.length = data.length;
  vehicle.maxAtmospheringSpeed = data.max_atmosphering_speed;
  vehicle.crew = data.crew;
  vehicle.passengers = data.passengers;
  vehicle.cargoCapacity = data.cargo_capacity;
  vehicle.consumables = data.consumables;
  vehicle.vehicleClass = data.vehicle_class;
  vehicle.pilots = data.pilots;
  vehicle.films = data.films;
  return vehicle;
};
