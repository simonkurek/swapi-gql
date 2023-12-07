import { Module } from '@nestjs/common';
import { PlanetsResolver } from './planets.resolver';
import { PlanetsModule } from 'src/core/planets/planets.module';
import { PlanetsService } from 'src/core/planets/planets.service';

@Module({
  imports: [PlanetsModule],
  providers: [PlanetsResolver, PlanetsService],
})
export class ApiPlanetsModule {}
