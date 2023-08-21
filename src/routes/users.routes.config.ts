import express from 'express';
import { CommonRoutesConfig } from './common.routes.config';

export class UsersRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'UsersRoutes');
  }

  configureRoutes(): express.Application {
    this.app.route('users').post();

    return this.app;
  }
}
