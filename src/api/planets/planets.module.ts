import { Module } from '@nestjs/common';
import { PlanetsResolver } from './planets.resolver';
import { PlanetsModule } from '../../core/planets/planets.module';

@Module({
  imports: [PlanetsModule],
  providers: [PlanetsResolver],
})
export class ApiPlanetsModule {}
