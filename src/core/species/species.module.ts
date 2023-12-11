import { Module } from '@nestjs/common';
import { SpeciesService } from './species.service';
import { InfrastructureModule } from '../../infrastructure/infrastructure.module';

@Module({
  imports: [InfrastructureModule],
  providers: [SpeciesService],
  exports: [SpeciesService],
})
export class SpeciesModule {}
