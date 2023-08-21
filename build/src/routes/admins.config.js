"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminsRoutes = void 0;
const common_routes_config_1 = require("./common.routes.config");
class AdminsRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'AdminsRoutes');
    }
    configureRoutes() {
        this.app.route('admins').get().post();
        this.app.route('admins/:id').get().delete();
        return this.app;
    }
}
exports.AdminsRoutes = AdminsRoutes;
