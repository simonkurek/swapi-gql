import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Film {
  @Field(() => String, { description: 'Film title' })
  title: string;

  @Field(() => String, { description: 'Episode id' })
  episodeId: string;

  @Field(() => String, { description: 'Opening crawl' })
  openingCrawl: string;

  @Field(() => String, { description: 'Director' })
  director: string;

  @Field(() => String, { description: 'Producer' })
  producer: string;

  @Field(() => String, { description: 'Release date' })
  releaseDate: string;

  @Field(() => [String], { description: 'Characters' })
  characters: string[];

  @Field(() => [String], { description: 'Planets' })
  planets: string[];

  @Field(() => [String], { description: 'Starships' })
  starships: string[];

  @Field(() => [String], { description: 'Vehicles' })
  vehicles: string[];

  @Field(() => [String], { description: 'Species' })
  species: string[];
}
