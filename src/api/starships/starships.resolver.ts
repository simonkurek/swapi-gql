import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { StarshipsService } from '../../core/starships/starships.service';
import { Starship } from './entities/starship.entity';
import { IsPublic } from '../auth/decorators/public.decorator';

@Resolver(() => Starship)
export class StarshipsResolver {
  constructor(private readonly starshipsService: StarshipsService) {}

  @IsPublic()
  @Query(() => [Starship], {
    name: 'starships',
    description: 'Returns all Star Wars starships',
  })
  findAll() {
    return this.starshipsService.findAll();
  }

  @Query(() => Starship, {
    name: 'starship',
    description:
      'Returns a Star Wars starship by id, only for authenticated users',
  })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.starshipsService.findOne(id);
  }
}
