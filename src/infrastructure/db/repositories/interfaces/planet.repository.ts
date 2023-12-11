import { Planet } from '../../../../core/planets/planet';

export interface PlanetRepository {
  getAll(): Promise<Planet[]>;
  getById(id: number): Promise<Planet>;
  update(data: Planet[]): Promise<void>;
}
