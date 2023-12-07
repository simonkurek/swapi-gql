import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { SwapiModule } from './swapi/swapi.module';

@Module({
  imports: [DbModule, SwapiModule],
})
export class InfrastructureModule {}
