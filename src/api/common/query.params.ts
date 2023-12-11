import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class Pagination {
  @Field(() => Number, { description: 'Page number' })
  page: number;

  @Field(() => Number, { description: 'Page size' })
  pageSize: number;
}

@InputType()
export class QueryParams {
  @Field(() => Pagination, { nullable: true })
  pagination?: Pagination;
}
