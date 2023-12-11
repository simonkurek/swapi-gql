import { Inject, Injectable } from '@nestjs/common';
import { CreateUserInput } from '../../api/users/dto/create-user.input';
import { UserRepository } from '../../infrastructure/db/repositories/interfaces/user.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @Inject('UserRepository')
    private readonly userRepository: UserRepository,
  ) {}

  async create(createUserInput: CreateUserInput) {
    const passwordHash = await bcrypt.hash(createUserInput.password, 10);
    return await this.userRepository.create(
      createUserInput.login,
      passwordHash,
    );
  }

  async findOneByLogin(login: string) {
    return await this.userRepository.findByLogin(login);
  }
}
