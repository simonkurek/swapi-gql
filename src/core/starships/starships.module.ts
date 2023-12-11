import { Module } from '@nestjs/common';
import { StarshipsService } from './starships.service';
import { InfrastructureModule } from '../../infrastructure/infrastructure.module';

@Module({
  imports: [InfrastructureModule],
  providers: [StarshipsService],
  exports: [StarshipsService],
})
export class StarshipsModule {}
