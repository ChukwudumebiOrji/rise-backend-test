import express from 'express';
import { CommonRoutesConfig } from './common.routes.config';

export class FilesRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'FilesRoutes');
  }

  configureRoutes(): express.Application {
    this.app.route('files').get().post();

    this.app.route('files/:id').get().delete();

    this.app.route('files/:id/unsafe').put().delete();

    this.app.route('files/unsafe').get();

    this.app.route('files/unsafe/:id').get();

    return this.app;
  }
}
