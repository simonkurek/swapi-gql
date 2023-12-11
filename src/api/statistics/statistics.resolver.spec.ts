import { Test, TestingModule } from '@nestjs/testing';
import { StatisticsResolver } from './statistics.resolver';
import { StatisticsModule } from '../../core/statistics/statistics.module';

describe('StatisticsResolver', () => {
  let resolver: StatisticsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [StatisticsModule],
      providers: [StatisticsResolver],
    }).compile();

    resolver = module.get<StatisticsResolver>(StatisticsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
