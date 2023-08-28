import { errorHandler } from './middlewares/error.middleware';
import { CommonRoutesConfig } from './routes/common.routes.config';
import { FilesRoutes } from './routes/files.routes.config';
import { FoldersRoutes } from './routes/folders.routes.config';
import { UsersRoutes } from './routes/users.routes.config';

import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;
require('dotenv').config();

import dbConfig from './config/db';
import { notFoundHandler } from './middlewares/notFound.middleware';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes: Array<CommonRoutesConfig> = [new UsersRoutes(app), new FilesRoutes(app), new FoldersRoutes(app)]; // to hold all route objects

routes.forEach(route => {
  route.configureRoutes();
  console.log(`Routes configured for ${route.getName()}`);
});

app.use(errorHandler);
app.use(notFoundHandler);

app.listen(PORT, () => {
  dbConfig.testDbConnection();
  console.log(`Listening on port ${PORT}`);
});
