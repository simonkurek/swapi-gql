import { Film } from '../../../../core/films/film';
import { FilmRepository } from '../interfaces/film.repository';
import { Repository } from 'typeorm';
import { FilmEntity } from '../../entities/film';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FilmRepositoryPgImpl implements FilmRepository {
  constructor(
    @InjectRepository(FilmEntity)
    private readonly filmRepository: Repository<FilmEntity>,
  ) {}

  async getAll(): Promise<Film[]> {
    const filmEntities = await this.filmRepository.find();
    return filmEntities.map((filmEntity) => filmEntity.toDomainModel());
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getById(id: number): Promise<Film> {
    throw new Error('Method not implemented.');
  }

  async update(data: Film[]): Promise<void> {
    await this.removeAll();
    const filmEntities = data as FilmEntity[];
    await this.filmRepository.save(filmEntities);
  }

  private async removeAll(): Promise<void> {
    await this.filmRepository.clear();
  }
}
