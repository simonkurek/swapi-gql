import { Test, TestingModule } from '@nestjs/testing';
import { PeoplesResolver } from './peoples.resolver';
import { PeoplesService } from '../../core/peoples/peoples.service';

describe('PeoplesResolver', () => {
  let resolver: PeoplesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PeoplesResolver, PeoplesService],
    }).compile();

    resolver = module.get<PeoplesResolver>(PeoplesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
