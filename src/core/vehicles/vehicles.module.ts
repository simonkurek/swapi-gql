import { Module } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { InfrastructureModule } from '../../infrastructure/infrastructure.module';

@Module({
  imports: [InfrastructureModule],
  providers: [VehiclesService],
  exports: [VehiclesService],
})
export class VehiclesModule {}
