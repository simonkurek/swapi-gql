import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Species {
  @Field(() => String)
  name: string;

  @Field(() => String)
  rotationPeriod: string;

  @Field(() => String)
  orbitalPeriod: string;

  @Field(() => String)
  diameter: string;

  @Field(() => String)
  climate: string;

  @Field(() => String)
  gravity: string;

  @Field(() => String)
  terrain: string;

  @Field(() => String)
  surfaceWater: string;

  @Field(() => String)
  population: string;

  @Field(() => [String])
  residents: string[]; // | People[];

  @Field(() => [String])
  films: string[]; // | Film[];
}
