import { Module } from '@nestjs/common';
import { StatisticsResolver } from './statistics.resolver';
import { StatisticsModule } from 'src/core/statistics/statistics.module';

@Module({
  imports: [StatisticsModule],
  providers: [StatisticsResolver],
})
export class ApiStatisticsModule {}
