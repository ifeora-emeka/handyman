import { env } from './env.config';

export const config = {
  port: env.PORT,
  nodeEnv: env.NODE_ENV,
  isDevelopment: env.isDevelopment,
  databaseUrl: env.DATABASE_URL,
};
