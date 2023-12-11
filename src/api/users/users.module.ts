import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { UsersModule } from 'src/core/users/users.module';

@Module({
  imports: [UsersModule],
  providers: [UsersResolver],
})
export class ApiUsersModule {}
