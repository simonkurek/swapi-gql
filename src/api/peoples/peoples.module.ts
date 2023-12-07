import { Module } from '@nestjs/common';
import { PeoplesResolver } from './peoples.resolver';
import { PeoplesModule } from 'src/core/peoples/peoples.module';
import { PeoplesService } from 'src/core/peoples/peoples.service';

@Module({
  imports: [PeoplesModule],
  providers: [PeoplesResolver, PeoplesService],
})
export class ApiPeoplesModule {}
