import { Module } from '@nestjs/common';
import { ApiFilmsModule } from './films/films.module';
import { ApiSpeciesModule } from './species/species.module';
import { ApiVehiclesModule } from './vehicles/vehicles.module';
import { ApiStarshipsModule } from './starships/starships.module';
import { ApiPlanetsModule } from './planets/planets.module';
import { ApiPeoplesModule } from './peoples/peoples.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [
    ApiFilmsModule,
    ApiSpeciesModule,
    ApiVehiclesModule,
    ApiStarshipsModule,
    ApiPlanetsModule,
    ApiPeoplesModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      driver: ApolloDriver,
    }),
  ],
})
export class ApiModule {}
