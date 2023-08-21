import express from 'express';
import { CommonRoutesConfig } from './common.routes.config';

export class FoldersRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'FoldersRoutes');
  }

  configureRoutes(): express.Application {
    this.app.route('folders').get().post();

    this.app.route('folders/:id').get().delete();

    return this.app;
  }
}
