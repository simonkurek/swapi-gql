import { Module } from '@nestjs/common';
import { StarshipsService } from './starships.service';

@Module({
  providers: [StarshipsService],
  exports: [StarshipsService],
})
export class StarshipsModule {}
