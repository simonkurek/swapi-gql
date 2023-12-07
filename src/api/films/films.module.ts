import { Module } from '@nestjs/common';
import { FilmsResolver } from './films.resolver';
import { FilmsModule } from 'src/core/films/films.module';
import { FilmsService } from 'src/core/films/films.service';

@Module({
  imports: [FilmsModule],
  providers: [FilmsResolver, FilmsService],
})
export class ApiFilmsModule {}
