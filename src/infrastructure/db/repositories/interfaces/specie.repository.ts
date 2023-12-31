import { Specie } from '../../../../core/species/specie';

export interface SpecieRepository {
  getAll(): Promise<Specie[]>;
  getById(id: number): Promise<Specie>;
  update(data: Specie[]): Promise<void>;
}
