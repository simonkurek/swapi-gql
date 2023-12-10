import { Starship } from 'src/core/starships/starship';

export interface StarshipRepository {
  getAll(): Promise<Starship[]>;
  getById(id: number): Promise<Starship>;
  update(data: Starship[]): Promise<void>;
}
