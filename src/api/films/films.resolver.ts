import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { FilmsService } from './films.service';
import { Film } from './entities/film.entity';

@Resolver(() => Film)
export class FilmsResolver {
  constructor(private readonly filmsService: FilmsService) {}

  @Query(() => [Film], { name: 'films' })
  findAll() {
    return this.filmsService.findAll();
  }

  @Query(() => Film, { name: 'film' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.filmsService.findOne(id);
  }
}
