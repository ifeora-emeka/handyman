import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import path from 'path';
import { logger } from './config/logger.config';
import { apiRouter } from './apis/api.route';
import { env } from './config/env.config';

const app = express();
const isProduction = env.NODE_ENV === 'production';

if (!isProduction) {
    app.use(cors({
        origin: 'http://localhost:3000',
        credentials: true,
    }));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req: Request, res: Response, next: NextFunction) => {
    logger.info({
        method: req.method,
        url: req.url,
        ip: req.ip,
    });
    next();
});

app.get('/health', (req: Request, res: Response) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
    });
});

app.use('/api-v1', apiRouter);

if (isProduction) {
    const nextStaticPath = path.join(__dirname, '../../.next/static');
    const nextPublicPath = path.join(__dirname, '../../public');
    
    app.use('/_next/static', express.static(nextStaticPath, {
        immutable: true,
        maxAge: '1y',
    }));
    
    app.use('/public', express.static(nextPublicPath, {
        maxAge: '1h',
    }));
    
    app.use((req: Request, res: Response, next: NextFunction) => {
        const nextServerPath = path.join(__dirname, '../../.next/standalone/server.js');
        try {
            const nextServer = require(nextServerPath);
            if (nextServer && typeof nextServer === 'function') {
                return nextServer(req, res);
            }
        } catch (error) {
            logger.error({ error }, 'Failed to load Next.js server');
        }
        
        const indexPath = path.join(__dirname, '../../.next/server/pages/index.html');
        res.sendFile(indexPath, (err) => {
            if (err) {
                logger.error({ err }, 'Failed to serve Next.js page');
                res.status(404).json({ error: 'Page not found' });
            }
        });
    });
}

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    logger.error(err);
    res.status(500).json({
        error: 'Internal Server Error',
        message: err.message,
    });
});

export default app;
