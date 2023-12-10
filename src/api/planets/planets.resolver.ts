import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { PlanetsService } from '../../core/planets/planets.service';
import { Planet } from './entities/planet.entity';

@Resolver(() => Planet)
export class PlanetsResolver {
  constructor(private readonly planetsService: PlanetsService) {}

  @Query(() => [Planet], {
    name: 'planets',
    description: 'Returns all Star Wars planets',
  })
  findAll() {
    return this.planetsService.findAll();
  }

  @Query(() => Planet, {
    name: 'planet',
    description:
      'Returns a Star Wars planet by id, only for authenticated users',
  })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.planetsService.findOne(id);
  }
}
