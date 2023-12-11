import { Test, TestingModule } from '@nestjs/testing';
import { SpeciesService } from './species.service';
import { InfrastructureModule } from '../../infrastructure/infrastructure.module';

describe('SpeciesService', () => {
  let service: SpeciesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [InfrastructureModule],
      providers: [SpeciesService],
    }).compile();

    service = module.get<SpeciesService>(SpeciesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
