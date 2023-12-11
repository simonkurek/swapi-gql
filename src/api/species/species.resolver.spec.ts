import { Test, TestingModule } from '@nestjs/testing';
import { SpeciesResolver } from './species.resolver';
import { SpeciesModule } from '../../core/species/species.module';

describe('SpeciesResolver', () => {
  let resolver: SpeciesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [SpeciesModule],
      providers: [SpeciesResolver],
    }).compile();

    resolver = module.get<SpeciesResolver>(SpeciesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
