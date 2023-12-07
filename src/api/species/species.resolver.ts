import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { SpeciesService } from './species.service';
import { Species } from './entities/species.entity';

@Resolver(() => Species)
export class SpeciesResolver {
  constructor(private readonly speciesService: SpeciesService) {}

  @Query(() => [Species], { name: 'species' })
  findAll() {
    return this.speciesService.findAll();
  }

  @Query(() => Species, { name: 'species' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.speciesService.findOne(id);
  }
}
