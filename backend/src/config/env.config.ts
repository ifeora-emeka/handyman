import { cleanEnv, str, port } from 'envalid';

export const env = cleanEnv(process.env, {
  NODE_ENV: str({ choices: ['development', 'production', 'test'], default: 'development' }),
  PORT: port({ default: 8080 }),
  DATABASE_URL: str(),
  ALLOWED_ORIGINS: str({ default: '' }),
});
