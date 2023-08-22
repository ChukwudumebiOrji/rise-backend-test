import { Request, Response, NextFunction } from 'express';

export const notFoundHandler = (request: Request, response: Response, next: NextFunction) => {
  const message = `${request.url}: Resource not found`;

  response.status(404).json({ code: 404, message });
};
