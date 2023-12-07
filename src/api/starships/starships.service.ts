import { Injectable } from '@nestjs/common';

@Injectable()
export class StarshipsService {
  findAll() {
    return `This action returns all starships`;
  }

  findOne(id: number) {
    return `This action returns a #${id} starship`;
  }
}
