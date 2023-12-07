import { Module } from '@nestjs/common';
import { AppConfigModule } from './config/app-config.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { ApiModule } from './api/api.module';

@Module({
  imports: [
    AppConfigModule,
    ApiModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      driver: ApolloDriver,
    }),
  ],
})
export class AppModule {}
