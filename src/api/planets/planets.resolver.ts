import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { PlanetsService } from './planets.service';
import { Planet } from './entities/planet.entity';

@Resolver(() => Planet)
export class PlanetsResolver {
  constructor(private readonly planetsService: PlanetsService) {}

  @Query(() => [Planet], { name: 'planets' })
  findAll() {
    return this.planetsService.findAll();
  }

  @Query(() => Planet, { name: 'planet' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.planetsService.findOne(id);
  }
}
