import { Test, TestingModule } from '@nestjs/testing';
import { PlanetsService } from './planets.service';
import { InfrastructureModule } from '../../infrastructure/infrastructure.module';

describe('PlanetsService', () => {
  let service: PlanetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [InfrastructureModule],
      providers: [PlanetsService],
    }).compile();

    service = module.get<PlanetsService>(PlanetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
