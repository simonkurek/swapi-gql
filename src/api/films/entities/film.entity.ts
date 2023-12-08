import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Film {
  @Field(() => String, { description: 'Film title' })
  title: string;

  @Field(() => String, { description: 'Episode id' })
  episode_id: string;

  @Field(() => String, { description: 'Opening crawl' })
  opening_crawl: string;

  @Field(() => String, { description: 'Director' })
  director: string;

  @Field(() => String, { description: 'Producer' })
  producer: string;

  @Field(() => String, { description: 'Release date' })
  release_date: string;

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
  // characters: string[] | People[];
  // planets: string[] | Planet[];
  // starships: string[] | Starship[];
  // vehicles: string[] | Vehicle[];
  // species: string[] | Specie[];
}
