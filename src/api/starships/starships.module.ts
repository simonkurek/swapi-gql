import { Module } from '@nestjs/common';
import { StarshipsResolver } from './starships.resolver';
import { StarshipsModule } from '../../core/starships/starships.module';

@Module({
  imports: [StarshipsModule],
  providers: [StarshipsResolver],
})
export class ApiStarshipsModule {}
