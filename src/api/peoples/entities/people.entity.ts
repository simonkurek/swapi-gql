import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class People {
  @Field(() => String)
  name: string;

  @Field(() => String)
  height: string;

  @Field(() => String)
  mass: string;

  @Field(() => String)
  hairColor: string;

  @Field(() => String)
  skinColor: string;

  @Field(() => String)
  eyeColor: string;

  @Field(() => String)
  birthYear: string;

  @Field(() => String)
  gender: string;

  @Field(() => String)
  homeworld: string; // | Planet;

  @Field(() => [String])
  films: string[]; // | Film[];

  @Field(() => [String])
  species: string[]; // | Specie[];

  @Field(() => [String])
  vehicles: string[]; // | Vehicle[];

  @Field(() => [String])
  starships: string[]; // | Starship[];
}
