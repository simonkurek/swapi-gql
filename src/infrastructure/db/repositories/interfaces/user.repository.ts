import { User } from '../../../../core/users/user';

export interface UserRepository {
  create(login: string, password: string): Promise<User>;
  findByLogin(login: string): Promise<User | null>;
}
