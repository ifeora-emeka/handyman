import { cleanEnv, str, port, url } from 'envalid';
import dotenv from 'dotenv';

dotenv.config();

export const env = cleanEnv(process.env, {
  NODE_ENV: str({ 
    choices: ['development', 'production', 'test'],
    default: 'development' 
  }),
  PORT: port({ default: 3001 }),
  DATABASE_URL: url(),
});
