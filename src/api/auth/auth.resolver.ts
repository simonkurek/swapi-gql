import { Resolver, Mutation, Args, Context } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { IsPublic } from './decorators/public.decorator';
import { UseGuards } from '@nestjs/common';
import { GraphQLAuthGuard } from './guards/graphql.guard';
import { SignInInput } from './dto/sign-in.input';
import { User } from '../../core/users/user';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => SignInDto)
  @IsPublic()
  @UseGuards(GraphQLAuthGuard)
  async signIn(
    @Args('signInInput') signInInput: SignInInput,
    @Context() context: { user: User },
  ) {
    return await this.authService.signIn(context.user);
  }
}
