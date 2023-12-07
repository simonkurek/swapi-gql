import { Module } from '@nestjs/common';
import { VehiclesResolver } from './vehicles.resolver';
import { VehiclesModule } from 'src/core/vehicles/vehicles.module';
import { VehiclesService } from 'src/core/vehicles/vehicles.service';

@Module({
  imports: [VehiclesModule],
  providers: [VehiclesResolver, VehiclesService],
})
export class ApiVehiclesModule {}
