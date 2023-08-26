import express from 'express';
import { CommonRoutesConfig } from './common.routes.config';
import filesController from '../controllers/files.controller';

const multer = require('multer');
const upload = multer({ dest: 'uploads/', fileSize: 2e8 });

export class FilesRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'FilesRoutes');
  }

  configureRoutes(): express.Application {
    this.app.route('/files').post(upload.single(), filesController.saveFile);

    this.app.route('/files/:id').get(filesController.downloadFile).delete();

    this.app.route('/files/:id/unsafe').put().delete();

    this.app.route('/files/unsafe').get();

    this.app.route('/files/unsafe/:id').get();

    return this.app;
  }
}
