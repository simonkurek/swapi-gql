import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { PeoplesService } from '../../core/peoples/peoples.service';
import { People } from './entities/people.entity';

@Resolver(() => People)
export class PeoplesResolver {
  constructor(private readonly peoplesService: PeoplesService) {}

  @Query(() => [People], { name: 'peoples' })
  findAll() {
    return this.peoplesService.findAll();
  }

  @Query(() => People, { name: 'peoplesById' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.peoplesService.findOne(id);
  }
}
