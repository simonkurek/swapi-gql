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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getById(id: number): Promise<Starship> {
    throw new Error('Method not implemented.');
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
