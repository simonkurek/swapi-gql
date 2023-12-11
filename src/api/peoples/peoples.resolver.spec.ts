import { Test, TestingModule } from '@nestjs/testing';
import { PeoplesResolver } from './peoples.resolver';
import { PeoplesModule } from '../../core/peoples/peoples.module';

describe('PeoplesResolver', () => {
  let resolver: PeoplesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PeoplesModule],
      providers: [PeoplesResolver],
    }).compile();

    resolver = module.get<PeoplesResolver>(PeoplesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
