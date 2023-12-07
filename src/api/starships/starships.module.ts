import { Module } from '@nestjs/common';
import { StarshipsResolver } from './starships.resolver';
import { StarshipsModule } from 'src/core/starships/starships.module';
import { StarshipsService } from 'src/core/starships/starships.service';

@Module({
  imports: [StarshipsModule],
  providers: [StarshipsResolver, StarshipsService],
})
export class ApiStarshipsModule {}
