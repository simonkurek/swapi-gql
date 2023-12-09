import { Planet } from 'src/core/planets/planet';

export interface PlanetRepository {
  getAll(): Promise<Planet[]>;
  getById(id: number): Promise<Planet>;
}
