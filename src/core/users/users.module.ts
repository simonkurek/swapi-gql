import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';

@Module({
  imports: [InfrastructureModule],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
