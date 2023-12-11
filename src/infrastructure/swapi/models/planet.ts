import { Planet } from '../../../core/planets/planet';

export type SwapiPlanet = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
};

export const planetFactory = (data: SwapiPlanet): Planet => {
  const planet = new Planet();
  planet.name = data.name;
  planet.rotationPeriod = data.rotation_period;
  planet.orbitalPeriod = data.orbital_period;
  planet.diameter = data.diameter;
  planet.climate = data.climate;
  planet.gravity = data.gravity;
  planet.terrain = data.terrain;
  planet.surfaceWater = data.surface_water;
  planet.population = data.population;
  planet.residents = data.residents;
  planet.films = data.films;
  return planet;
};
