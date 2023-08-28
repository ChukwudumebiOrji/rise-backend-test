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
    /*
    This route is used to upload a file.
    */
    this.app.route('/files').post(upload.single(), filesController.saveFile);

    /*
    This route is used to download a file.
    */
    this.app.route('/files/:id').get(filesController.downloadFile);

    /*
    This route is used to stream a file.
    */
    this.app.route('/files/:id/stream').get(filesController.streamMedia);

    /*
    This route is used to mark a file as unsafe and delete it.
    */
    this.app.route('/files/:id/unsafe').put(filesController.markFilesUnsafe, filesController.deleteFile);

    return this.app;
  }
}
