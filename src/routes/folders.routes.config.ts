import express from 'express';
import { CommonRoutesConfig } from './common.routes.config';
import foldersController from '../controllers/folders.controller';

export class FoldersRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'FoldersRoutes');
  }

  configureRoutes(): express.Application {
    this.app.route('/folders').get().post(foldersController.createFolder);

    this.app.route('/folders/:id').get().delete();

    return this.app;
  }
}
