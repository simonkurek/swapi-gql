import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { VehiclesService } from '../../core/vehicles/vehicles.service';
import { Vehicle } from './entities/vehicle.entity';

@Resolver(() => Vehicle)
export class VehiclesResolver {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Query(() => [Vehicle], {
    name: 'vehicles',
    description: 'Returns all Star Wars vehicles',
  })
  findAll() {
    return this.vehiclesService.findAll();
  }

  @Query(() => Vehicle, {
    name: 'vehicle',
    description:
      'Returns a Star Wars vehicle by id, only for authenticated users',
  })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.vehiclesService.findOne(id);
  }
}
