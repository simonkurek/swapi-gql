import { Test, TestingModule } from '@nestjs/testing';
import { FilmsResolver } from './films.resolver';
import { FilmsModule } from '../../core/films/films.module';

describe('FilmsResolver', () => {
  let resolver: FilmsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [FilmsModule],
      providers: [FilmsResolver],
    }).compile();

    resolver = module.get<FilmsResolver>(FilmsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should return an array of films', async () => {
    const films = await resolver.findAll();
    expect(films.length).toBeGreaterThan(0);
  });

  it('should return a film by id', async () => {
    const film = await resolver.findOne(1);
    expect(film).toBeDefined();
    expect(film).toBeTruthy();
  });
});
