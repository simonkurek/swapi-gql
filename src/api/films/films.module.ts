import { Module } from '@nestjs/common';
import { FilmsResolver } from './films.resolver';
import { FilmsModule } from '../../core/films/films.module';

@Module({
  imports: [FilmsModule],
  providers: [FilmsResolver],
})
export class ApiFilmsModule {}
