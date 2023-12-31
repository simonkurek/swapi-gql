import { Module } from '@nestjs/common';
import { PeoplesService } from './peoples.service';
import { InfrastructureModule } from '../../infrastructure/infrastructure.module';

@Module({
  imports: [InfrastructureModule],
  providers: [PeoplesService],
  exports: [PeoplesService],
})
export class PeoplesModule {}
