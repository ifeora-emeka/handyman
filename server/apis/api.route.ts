import { Router } from 'express';
import { authRouter } from './auth/auth.route';

export const apiRouter = Router();

apiRouter.use('/auth', authRouter);
