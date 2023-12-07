import { Module } from '@nestjs/common';
import { PeoplesService } from './peoples.service';
import { PeoplesResolver } from './peoples.resolver';

@Module({
  providers: [PeoplesResolver, PeoplesService],
})
export class PeoplesModule {}
