import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { PeoplesService } from '../../core/peoples/peoples.service';
import { People } from './entities/people.entity';

@Resolver(() => People)
export class PeoplesResolver {
  constructor(private readonly peoplesService: PeoplesService) {}

  @Query(() => [People], {
    name: 'peoples',
    description: 'Returns all Star Wars people-characters',
  })
  findAll() {
    return this.peoplesService.findAll();
  }

  @Query(() => People, {
    name: 'peoplesById',
    description:
      'Returns a Star Wars people-character by id, only for authenticated users',
  })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.peoplesService.findOne(id);
  }
}
