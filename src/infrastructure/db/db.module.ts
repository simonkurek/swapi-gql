import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppConfigModule } from '../../config/app-config.module';
import { FilmEntity } from './entities/film';
import { PeopleEntity } from './entities/people';
import { PlanetEntity } from './entities/planet';
import { StarshipEntity } from './entities/starship';
import { VehicleEntity } from './entities/vehicle';
import { SpecieEntity } from './entities/specie';
import { FilmRepositoryPgImpl } from './repositories/pg-impl/film.postgres-repository';
import { PeopleRepositoryPgImpl } from './repositories/pg-impl/people.postgres-repository';
import { PlanetRepositoryPgImpl } from './repositories/pg-impl/planet.postgres-repository';
import { SpeciePostgresPgImpl } from './repositories/pg-impl/specie.postgres-repository';
import { StarshipRepositoryPgImpl } from './repositories/pg-impl/starship.postgres-repository';
import { VehicleRepositoryPgImpl } from './repositories/pg-impl/vehicle..postgres-repository';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [AppConfigModule],
      useFactory: (configService: ConfigService) =>
        configService.get('database'),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([
      FilmEntity,
      PeopleEntity,
      PlanetEntity,
      SpecieEntity,
      StarshipEntity,
      VehicleEntity,
    ]),
  ],
  providers: [
    {
      provide: 'FilmRepository',
      useClass: FilmRepositoryPgImpl,
    },
    {
      provide: 'PeopleRepository',
      useClass: PeopleRepositoryPgImpl,
    },
    {
      provide: 'PlanetRepository',
      useClass: PlanetRepositoryPgImpl,
    },
    {
      provide: 'SpecieRepository',
      useClass: SpeciePostgresPgImpl,
    },
    {
      provide: 'StarshipRepository',
      useClass: StarshipRepositoryPgImpl,
    },
    {
      provide: 'VehicleRepository',
      useClass: VehicleRepositoryPgImpl,
    },
  ],
  exports: [
    'FilmRepository',
    'PeopleRepository',
    'PlanetRepository',
    'SpecieRepository',
    'StarshipRepository',
    'VehicleRepository',
  ],
})
export class DbModule {}
