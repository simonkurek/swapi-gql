import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { SpeciesService } from '../../core/species/species.service';
import { Species } from './entities/species.entity';

@Resolver(() => Species)
export class SpeciesResolver {
  constructor(private readonly speciesService: SpeciesService) {}

  @Query(() => [Species], { name: 'species' })
  findAll() {
    return this.speciesService.findAll();
  }

  @Query(() => Species, { name: 'speciesById' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.speciesService.findOne(id);
  }
}
