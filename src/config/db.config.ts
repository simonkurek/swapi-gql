import { Inject } from '@nestjs/common';
import { ConfigType, registerAs } from '@nestjs/config';

export const databaseConfiguration = registerAs('database', () => {
  return {
    type: 'postgres',
    host: process.env.DB_HOST || '127.0.0.1',
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'pass123',
    database: process.env.DB_NAME || 'postgres',
    synchronize: process.env.DB_SYNCHRONIZE || false,
    autoLoadEntities: process.env.DB_AUTO_LOAD_ENTITIES || true,
  };
});

export type DatabaseConfiguration = ConfigType<typeof databaseConfiguration>;
export const InjectDatabaseConfig = () => Inject(databaseConfiguration.KEY);
