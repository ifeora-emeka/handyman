import app from './app';
import { env } from './config/env.config';
import { logger } from './config/logger.config';

const PORT = env.PORT;

const server = app.listen(PORT, () => {
    logger.info(`Server running in ${env.NODE_ENV} mode on port ${PORT}`);
    logger.info(`Health check available at http://localhost:${PORT}/health`);
});

process.on('SIGTERM', () => {
    logger.info('SIGTERM signal received: closing HTTP server');
    server.close(() => {
        logger.info('HTTP server closed');
        process.exit(0);
    });
});

process.on('SIGINT', () => {
    logger.info('SIGINT signal received: closing HTTP server');
    server.close(() => {
        logger.info('HTTP server closed');
        process.exit(0);
    });
});

process.on('unhandledRejection', (reason: any) => {
    logger.error('Unhandled Rejection:', reason);
    process.exit(1);
});

process.on('uncaughtException', (error: Error) => {
    logger.error(`Uncaught Exception: ${error && (error.stack ?? error.message ?? error)}`);
    process.exit(1);
});
