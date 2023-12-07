import { Module } from '@nestjs/common';
import { ApiFilmsModule } from './films/films.module';
import { ApiSpeciesModule } from './species/species.module';
import { ApiVehiclesModule } from './vehicles/vehicles.module';
import { ApiStarshipsModule } from './starships/starships.module';
import { ApiPlanetsModule } from './planets/planets.module';
import { ApiPeoplesModule } from './peoples/peoples.module';

@Module({
  imports: [
    ApiFilmsModule,
    ApiSpeciesModule,
    ApiVehiclesModule,
    ApiStarshipsModule,
    ApiPlanetsModule,
    ApiPeoplesModule,
  ],
})
export class ApiModule {}
