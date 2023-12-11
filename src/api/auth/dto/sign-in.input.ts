import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SignInInput {
  @Field(() => String, { description: 'User login' })
  login: string;

  @Field(() => String, { description: 'User password' })
  password: string;
}
