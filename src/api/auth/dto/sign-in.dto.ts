import { Field, ObjectType } from '@nestjs/graphql';
import { UserDto } from 'src/api/users/entities/user.entity';

@ObjectType()
export class SignInDto {
  @Field(() => String, { description: 'Access token' })
  accessToken: string;

  @Field(() => UserDto, { description: 'User' })
  user: UserDto;
}
