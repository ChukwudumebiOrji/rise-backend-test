"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_middleware_1 = require("./src/middlewares/error.middleware");
const admins_config_1 = require("./src/routes/admins.config");
const files_config_1 = require("./src/routes/files.config");
const folders_routes_config_1 = require("./src/routes/folders.routes.config");
const users_routes_config_1 = require("./src/routes/users.routes.config");
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const routes = [
    new users_routes_config_1.UsersRoutes(app),
    new files_config_1.FilesRoutes(app),
    new folders_routes_config_1.FoldersRoutes(app),
    new admins_config_1.AdminsRoutes(app),
]; // to hold all route objects
app.use(error_middleware_1.errorHandler);
app.listen(PORT, () => {
    routes.forEach(route => {
        console.log(`Routes configured for ${route.getName()}`);
    });
    console.log(`Listening on port ${PORT}`);
});