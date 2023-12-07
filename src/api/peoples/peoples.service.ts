import { Injectable } from '@nestjs/common';

@Injectable()
export class PeoplesService {
  findAll() {
    return `This action returns all peoples`;
  }

  findOne(id: number) {
    return `This action returns a #${id} people`;
  }
}
