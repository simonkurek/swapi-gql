import { Module } from '@nestjs/common';
import { SpeciesService } from './species.service';

@Module({
  providers: [SpeciesService],
  exports: [SpeciesService],
})
export class SpeciesModule {}
