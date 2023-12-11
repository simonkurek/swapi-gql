import { Field, ObjectType, Query, Resolver } from '@nestjs/graphql';
import { StatisticsService } from '../../core/statistics/statistics.service';

@ObjectType()
export class WordCountItem {
  @Field()
  word: string;

  @Field()
  count: number;
}

@ObjectType()
export class WordCount {
  @Field(() => [WordCountItem])
  value: WordCountItem[];
}

@Resolver()
export class StatisticsResolver {
  constructor(private readonly statisticsService: StatisticsService) {}

  @Query(() => WordCount, {
    name: 'wordCount',
    description: 'Returns the number of words occurrences in opening crawls',
  })
  async findAll() {
    const wordOccurrences = await this.statisticsService.wordCount();
    const wordCount: WordCountItem[] = [];
    wordOccurrences.forEach((value, key) => {
      wordCount.push({ word: key, count: value });
    });
    return { value: wordCount };
  }

  @Query(() => String, {
    name: 'mostAppearedCharacter',
    description: 'Returns the most appeared character in opening crawls',
  })
  async mostAppearedCharacter() {
    return await this.statisticsService.mostAppearedCharacter();
  }
}
