import { Router, Request, Response } from 'express';

export const authRouter = Router();

authRouter.get('/status', (req: Request, res: Response) => {
  res.json({ 
    message: 'Auth endpoint is working',
    timestamp: new Date().toISOString(),
  });
});
