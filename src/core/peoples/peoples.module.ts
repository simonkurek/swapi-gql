import { Module } from '@nestjs/common';
import { PeoplesService } from './peoples.service';

@Module({
  providers: [PeoplesService],
  imports: [],
})
export class PeoplesModule {}
