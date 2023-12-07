import { Module } from '@nestjs/common';
import { SpeciesResolver } from './species.resolver';
import { SpeciesModule } from 'src/core/species/species.module';
import { SpeciesService } from 'src/core/species/species.service';

@Module({
  imports: [SpeciesModule],
  providers: [SpeciesResolver, SpeciesService],
})
export class ApiSpeciesModule {}
