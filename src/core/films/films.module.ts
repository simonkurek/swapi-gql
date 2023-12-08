import { Module } from '@nestjs/common';
import { FilmsService } from './films.service';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';

@Module({
  imports: [InfrastructureModule],
  providers: [FilmsService],
  exports: [FilmsService],
})
export class FilmsModule {}
