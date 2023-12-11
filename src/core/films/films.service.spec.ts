import { Test, TestingModule } from '@nestjs/testing';
import { FilmsService } from './films.service';
import { InfrastructureModule } from '../../infrastructure/infrastructure.module';

describe('FilmsService', () => {
  let service: FilmsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [InfrastructureModule],
      providers: [FilmsService],
    }).compile();

    service = module.get<FilmsService>(FilmsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of films', async () => {
    const films = await service.findAll();
    expect(films.length).toBeGreaterThan(0);
  });

  it('should return a film by id', async () => {
    const film = await service.findOne(1);
    expect(film).toBeDefined();
    expect(film).toBeTruthy();
  });
});
