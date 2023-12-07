import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Species {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
