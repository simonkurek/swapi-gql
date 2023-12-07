import { Module } from '@nestjs/common';
import { AppConfigModule } from './config/app-config.module';
import { ApiModule } from './api/api.module';
import { CoreModule } from './core/core.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';

@Module({
  imports: [AppConfigModule, ApiModule, CoreModule, InfrastructureModule],
})
export class AppModule {}
