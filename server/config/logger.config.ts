import pino from 'pino';
import pretty from 'pino-pretty';
import { env } from './env.config';

const isDevelopment = env.NODE_ENV === 'development';

export const logger = isDevelopment
  ? pino(
      pretty({
        colorize: true,
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname',
        sync: true,
      })
    )
  : pino({
      level: 'info',
      formatters: {
        level: (label) => {
          return { level: label.toUpperCase() };
        },
      },
      timestamp: pino.stdTimeFunctions.isoTime,
    });
