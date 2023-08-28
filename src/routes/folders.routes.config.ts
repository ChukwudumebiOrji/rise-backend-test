import express from 'express';
import { CommonRoutesConfig } from './common.routes.config';
import foldersController from '../controllers/folders.controller';

export class FoldersRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'FoldersRoutes');
  }

  configureRoutes(): express.Application {
    /*
    This route is used to create a folder.
    */
    this.app.route('/folders').post(foldersController.createFolder);

    return this.app;
  }
}
