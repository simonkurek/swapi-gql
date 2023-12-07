import { Module } from '@nestjs/common';
import { FilmsResolver } from './films.resolver';

@Module({
  providers: [FilmsResolver],
})
export class ApiFilmsModule {}
