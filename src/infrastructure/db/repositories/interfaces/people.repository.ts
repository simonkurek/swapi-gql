import { People } from 'src/core/peoples/people';

export interface PeopleRepository {
  getAll(): Promise<People[]>;
  getById(id: number): Promise<People>;
}
