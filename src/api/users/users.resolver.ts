import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UsersService } from '../../core/users/users.service';
import { UserDto } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { IsPublic } from '../auth/decorators/public.decorator';

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @IsPublic()
  @Mutation(() => UserDto)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return await this.usersService.create(createUserInput);
  }
}
