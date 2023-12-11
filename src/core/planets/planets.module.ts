import { Module } from '@nestjs/common';
import { PlanetsService } from './planets.service';
import { InfrastructureModule } from '../../infrastructure/infrastructure.module';

@Module({
  imports: [InfrastructureModule],
  providers: [PlanetsService],
  exports: [PlanetsService],
})
export class PlanetsModule {}
