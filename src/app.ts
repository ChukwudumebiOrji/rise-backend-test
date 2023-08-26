import { errorHandler } from './middlewares/error.middleware';
import { CommonRoutesConfig } from './routes/common.routes.config';
import { AdminsRoutes } from './routes/admins.routes.config';
import { FilesRoutes } from './routes/files.routes.config';
import { FoldersRoutes } from './routes/folders.routes.config';
import { UsersRoutes } from './routes/users.routes.config';

import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;
require('dotenv').config();

import dbConfig from './config/db';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(errorHandler);

const routes: Array<CommonRoutesConfig> = [
  new UsersRoutes(app),
  new FilesRoutes(app),
  new FoldersRoutes(app),
  new AdminsRoutes(app),
]; // to hold all route objects

routes.forEach(route => {
  route.configureRoutes();
  console.log(`Routes configured for ${route.getName()}`);
});

app.listen(PORT, () => {
  dbConfig.testDbConnection();
  console.log(`Listening on port ${PORT}`);
});
