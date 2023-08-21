import { Request, Response, NextFunction } from 'express';

export const errorHandler = (error: any, request: Request, response: Response, next: NextFunction) => {
  const code = error.statusCode || 500;
  const message = error?.message || 'Unknown Error';

  response.status(code).json({ code, message });
};
