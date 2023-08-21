"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesRoutes = void 0;
const common_routes_config_1 = require("./common.routes.config");
class FilesRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'FilesRoutes');
    }
    configureRoutes() {
        this.app.route('files').get().post();
        this.app.route('files/:id').get().delete();
        this.app.route('files/:id/unsafe').put().delete();
        this.app.route('files/unsafe').get();
        this.app.route('files/unsafe/:id').get();
        return this.app;
    }
}
exports.FilesRoutes = FilesRoutes;
