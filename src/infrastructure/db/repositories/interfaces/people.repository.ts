import { People } from '../../../../core/peoples/people';

export interface PeopleRepository {
  getAll(): Promise<People[]>;
  getById(id: number): Promise<People>;
  update(data: People[]): Promise<void>;
}
