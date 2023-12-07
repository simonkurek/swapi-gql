import { Module } from '@nestjs/common';
import { FilmsModule } from './films/films.module';
import { SpeciesModule } from './species/species.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { StarshipsModule } from './starships/starships.module';
import { PlanetsModule } from './planets/planets.module';
import { PeoplesModule } from './peoples/peoples.module';

@Module({
  imports: [
    FilmsModule,
    SpeciesModule,
    VehiclesModule,
    StarshipsModule,
    PlanetsModule,
    PeoplesModule,
  ],
})
export class ApiModule {}
