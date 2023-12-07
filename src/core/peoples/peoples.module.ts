import { Module } from '@nestjs/common';
import { PeoplesService } from './peoples.service';

@Module({
  providers: [PeoplesService],
  exports: [PeoplesService],
})
export class PeoplesModule {}
