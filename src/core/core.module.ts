import { Module } from '@nestjs/common';
import { FilmsModule } from './films/films.module';
import { PeoplesModule } from './peoples/peoples.module';
import { PlanetsModule } from './planets/planets.module';
import { SpeciesModule } from './species/species.module';
import { StarshipsModule } from './starships/starships.module';
import { VehiclesModule } from './vehicles/vehicles.module';

@Module({
  imports: [
    FilmsModule,
    PeoplesModule,
    PlanetsModule,
    SpeciesModule,
    StarshipsModule,
    VehiclesModule,
  ],
})
export class CoreModule {}
