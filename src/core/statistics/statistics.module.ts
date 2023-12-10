import { Module } from '@nestjs/common';
import { StatisticsService } from './statistics.service';
import { FilmsModule } from '../films/films.module';
import { PeoplesModule } from '../peoples/peoples.module';

@Module({
  imports: [FilmsModule, PeoplesModule],
  providers: [StatisticsService],
  exports: [StatisticsService],
})
export class StatisticsModule {}
