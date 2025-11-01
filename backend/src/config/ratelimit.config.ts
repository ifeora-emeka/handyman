import { env } from './env.config';

export const rateLimitConfig = {
  windowMs: 15 * 60 * 1000,
  max: env.isDevelopment ? 1000 : 100,
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
};
