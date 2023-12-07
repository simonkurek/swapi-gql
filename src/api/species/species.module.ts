import { Module } from '@nestjs/common';
import { SpeciesResolver } from './species.resolver';
import { SpeciesModule } from 'src/core/species/species.module';

@Module({
  imports: [SpeciesModule],
  providers: [SpeciesResolver],
})
export class ApiSpeciesModule {}
