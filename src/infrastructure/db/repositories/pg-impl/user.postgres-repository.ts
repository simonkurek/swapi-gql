import { Injectable } from '@nestjs/common';
import { UserRepository } from '../interfaces/user.repository';
import { User } from '../../../../core/users/user';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../../entities/user';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepositoryPgImpl implements UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async create(login: string, password: string): Promise<User> {
    const user = this.userRepository.create({ login, password });
    return (await this.userRepository.save(user)).toDomainModel();
  }

  async findByLogin(login: string): Promise<User> {
    const user = await this.userRepository.findOneByOrFail({ login });
    return user.toDomainModel();
  }
}
