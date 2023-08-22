"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoutes = void 0;
const common_routes_config_1 = require("./common.routes.config");
const users_controllers_1 = __importDefault(require("../controllers/users.controllers"));
const express_validator_1 = require("express-validator");
class UsersRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'UsersRoutes');
    }
    configureRoutes() {
        this.app
            .route('users')
            .post((0, express_validator_1.body)('full_name').isString(), (0, express_validator_1.body)('email').isEmail(), (0, express_validator_1.body)('password').isString(), users_controllers_1.default.createUser);
        return this.app;
    }
}
exports.UsersRoutes = UsersRoutes;
