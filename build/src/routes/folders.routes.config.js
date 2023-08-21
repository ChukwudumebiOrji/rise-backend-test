"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoldersRoutes = void 0;
const common_routes_config_1 = require("./common.routes.config");
class FoldersRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'FoldersRoutes');
    }
    configureRoutes() {
        this.app.route('folders').get().post();
        this.app.route('folders/:id').get().delete();
        return this.app;
    }
}
exports.FoldersRoutes = FoldersRoutes;
