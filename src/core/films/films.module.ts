import { Module } from '@nestjs/common';
import { FilmsService } from './films.service';

@Module({
  providers: [FilmsService],
  exports: [FilmsService],
})
export class FilmsModule {}
