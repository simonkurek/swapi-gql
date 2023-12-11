import { Test, TestingModule } from '@nestjs/testing';
import { StarshipsResolver } from './starships.resolver';
import { StarshipsModule } from '../../core/starships/starships.module';

describe('StarshipsResolver', () => {
  let resolver: StarshipsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [StarshipsModule],
      providers: [StarshipsResolver],
    }).compile();

    resolver = module.get<StarshipsResolver>(StarshipsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
