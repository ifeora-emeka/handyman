import dotenv from 'dotenv';
import { env } from './env.config';

dotenv.config();

export const config = {
  port: env.PORT,
  nodeEnv: env.NODE_ENV,
  isDevelopment: env.isDevelopment,
  databaseUrl: env.DATABASE_URL,
};
