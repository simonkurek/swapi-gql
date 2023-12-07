import { Module } from '@nestjs/common';
import { PeoplesResolver } from './peoples.resolver';
import { PeoplesModule } from 'src/core/peoples/peoples.module';

@Module({
  imports: [PeoplesModule],
  providers: [PeoplesResolver],
})
export class ApiPeoplesModule {}
