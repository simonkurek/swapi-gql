import { Module } from '@nestjs/common';
import { VehiclesResolver } from './vehicles.resolver';
import { VehiclesModule } from 'src/core/vehicles/vehicles.module';

@Module({
  imports: [VehiclesModule],
  providers: [VehiclesResolver],
})
export class ApiVehiclesModule {}
