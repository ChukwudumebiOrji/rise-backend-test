import { errorHandler } from './src/middlewares/error.middleware';
import { notFoundHandler } from './src/middlewares/notFound.middleware';
import { CommonRoutesConfig } from './src/routes/common.routes.config';
import { AdminsRoutes } from './src/routes/admins.routes.config';
import { FilesRoutes } from './src/routes/files.routes.config';
import { FoldersRoutes } from './src/routes/folders.routes.config';
import { UsersRoutes } from './src/routes/users.routes.config';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const routes: Array<CommonRoutesConfig> = [
  new UsersRoutes(app),
  new FilesRoutes(app),
  new FoldersRoutes(app),
  new AdminsRoutes(app),
]; // to hold all route objects

app.use(errorHandler);
app.use(notFoundHandler);

app.listen(PORT, async () => {
  routes.forEach(route => {
    route.configureRoutes();
    console.log(`Routes configured for ${route.getName()}`);
  });

  console.log(`Listening on port ${PORT}`);
});
