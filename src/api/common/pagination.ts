import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Type } from '@nestjs/common';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function PaginateResult<T>(ItemType: Type<T>): any {
  @ObjectType({ isAbstract: true })
  abstract class PageClass {
    @Field(() => [ItemType])
    content: T[];

    @Field(() => Int)
    totalPages: number;

    constructor(content: T[], totalPages: number) {
      this.content = content;
      this.totalPages = totalPages;
    }
  }

  return PageClass;
}
