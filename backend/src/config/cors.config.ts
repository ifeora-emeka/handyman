import { env } from './env.config';

const developmentOrigins = [
  'http://localhost:3000',
  'http://localhost:3001',
  'http://127.0.0.1:3000',
  'http://127.0.0.1:3001',
];

const productionOrigins = env.ALLOWED_ORIGINS 
  ? env.ALLOWED_ORIGINS.split(',').map(origin => origin.trim())
  : [];

export const allowedOrigins = env.isDevelopment 
  ? developmentOrigins 
  : productionOrigins;
