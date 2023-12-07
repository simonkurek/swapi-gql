import { Module } from '@nestjs/common';
import { databaseConfiguration } from './db.config';
import { appConfiguration } from './app.config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfiguration, appConfiguration],
    }),
  ],
})
export class AppConfigModule {}
