import { Starship } from '../../../../core/starships/starship';
import { StarshipRepository } from '../interfaces/starship.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { StarshipEntity } from '../../entities/starship';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class StarshipRepositoryPgImpl implements StarshipRepository {
  constructor(
    @InjectRepository(StarshipEntity)
    private readonly starshipRepository: Repository<StarshipEntity>,
  ) {}

  async getAll(): Promise<Starship[]> {
    const starshipEntities = await this.starshipRepository.find();
    return starshipEntities.map((starshipEntity) =>
      starshipEntity.toDomainModel(),
    );
  }

  async getById(id: number): Promise<Starship> {
    const starshipEntity = await this.starshipRepository.findOneByOrFail({
      id,
    });
    return starshipEntity.toDomainModel();
  }

  async update(data: Starship[]): Promise<void> {
    await this.removeAll();
    const filmEntities = data as StarshipEntity[];
    await this.starshipRepository.save(filmEntities);
  }

  private async removeAll(): Promise<void> {
    await this.starshipRepository.clear();
  }
}
