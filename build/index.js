"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const error_middleware_1 = require("./src/middlewares/error.middleware");
const notFound_middleware_1 = require("./src/middlewares/notFound.middleware");
const admins_routes_config_1 = require("./src/routes/admins.routes.config");
const files_routes_config_1 = require("./src/routes/files.routes.config");
const folders_routes_config_1 = require("./src/routes/folders.routes.config");
const users_routes_config_1 = require("./src/routes/users.routes.config");
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const routes = [
    new users_routes_config_1.UsersRoutes(app),
    new files_routes_config_1.FilesRoutes(app),
    new folders_routes_config_1.FoldersRoutes(app),
    new admins_routes_config_1.AdminsRoutes(app),
]; // to hold all route objects
app.use(error_middleware_1.errorHandler);
app.use(notFound_middleware_1.notFoundHandler);
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    routes.forEach(route => {
        route.configureRoutes();
        console.log(`Routes configured for ${route.getName()}`);
    });
    console.log(`Listening on port ${PORT}`);
}));
