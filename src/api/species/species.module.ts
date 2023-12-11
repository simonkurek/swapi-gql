import { Module } from '@nestjs/common';
import { SpeciesResolver } from './species.resolver';
import { SpeciesModule } from '../../core/species/species.module';

@Module({
  imports: [SpeciesModule],
  providers: [SpeciesResolver],
})
export class ApiSpeciesModule {}
