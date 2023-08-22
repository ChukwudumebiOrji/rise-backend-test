import express from 'express';
import { CommonRoutesConfig } from './common.routes.config';

export class AdminsRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'AdminsRoutes');
  }

  configureRoutes(): express.Application {
    this.app.route('admins').get().post();

    this.app.route('admins/:id').get().delete();

    return this.app;
  }
}
