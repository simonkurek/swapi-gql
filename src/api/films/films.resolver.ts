import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { FilmsService } from '../../core/films/films.service';
import { Film } from './entities/film.entity';
import { IsPublic } from '../auth/decorators/public.decorator';

@Resolver(() => Film)
export class FilmsResolver {
  constructor(private readonly filmsService: FilmsService) {}

  @IsPublic()
  @Query(() => [Film], {
    name: 'films',
    description: 'Returns all Star Wars films',
  })
  findAll() {
    return this.filmsService.findAll();
  }

  @Query(() => Film, {
    name: 'film',
    description: 'Returns a Star Wars film by id, only for authenticated users',
  })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.filmsService.findOne(id);
  }
}
