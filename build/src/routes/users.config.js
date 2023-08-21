"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoutesConfig = void 0;
const common_routes_config_1 = require("./common.routes.config");
class UsersRoutesConfig extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'UsersRoutes');
    }
    configureRoutes() {
        this.app.route('users').post();
        return this.app;
    }
}
exports.UsersRoutesConfig = UsersRoutesConfig;
