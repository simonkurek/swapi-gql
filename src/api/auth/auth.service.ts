import { Injectable } from '@nestjs/common';
import { SignInDto } from './dto/sign-in.dto';
import { JwtPayload } from './jwt.payload';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../../core/users/users.service';
import { User } from '../../core/users/user';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from '../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(login: string, pass: string): Promise<User | null> {
    const user = await this.usersService.findOneByLogin(login);
    const passwordCorrect = await bcrypt.compare(pass, user?.password);
    if (user && passwordCorrect) {
      return user;
    }
    return null;
  }

  async signIn(user: User): Promise<SignInDto> {
    const payload: JwtPayload = { sub: user.id, login: user.login };
    return {
      accessToken: await this.jwtService.signAsync(payload),
      user: UserDto.fromDomainUser(user),
    };
  }
}
