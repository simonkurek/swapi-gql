import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { StarshipsService } from './starships.service';
import { Starship } from './entities/starship.entity';

@Resolver(() => Starship)
export class StarshipsResolver {
  constructor(private readonly starshipsService: StarshipsService) {}

  @Query(() => [Starship], { name: 'starships' })
  findAll() {
    return this.starshipsService.findAll();
  }

  @Query(() => Starship, { name: 'starship' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.starshipsService.findOne(id);
  }
}
