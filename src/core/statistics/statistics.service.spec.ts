import { Test, TestingModule } from '@nestjs/testing';
import { StatisticsService } from './statistics.service';
import { FilmsModule } from '../films/films.module';
import { PeoplesModule } from '../peoples/peoples.module';

describe('StatisticsService', () => {
  let service: StatisticsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [FilmsModule, PeoplesModule],
      providers: [StatisticsService],
    }).compile();

    service = module.get<StatisticsService>(StatisticsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
