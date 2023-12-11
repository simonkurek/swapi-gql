import { Test, TestingModule } from '@nestjs/testing';
import { StarshipsService } from './starships.service';
import { InfrastructureModule } from '../../infrastructure/infrastructure.module';

describe('StarshipsService', () => {
  let service: StarshipsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [InfrastructureModule],
      providers: [StarshipsService],
    }).compile();

    service = module.get<StarshipsService>(StarshipsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
