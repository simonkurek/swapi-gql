import { Module } from '@nestjs/common';
import { PeoplesResolver } from './peoples.resolver';

@Module({
  providers: [PeoplesResolver],
})
export class ApiPeoplesModule {}
