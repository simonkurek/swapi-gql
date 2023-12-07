import { Module } from '@nestjs/common';
import { PlanetsService } from './planets.service';

@Module({
  providers: [PlanetsService],
  exports: [PlanetsService],
})
export class PlanetsModule {}
