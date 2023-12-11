import { Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from 'src/core/users/user';

@ObjectType()
export class UserDto {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  login: string;

  static fromDomainUser(user: User): UserDto {
    return {
      id: user.id,
      login: user.login,
    };
  }
}
