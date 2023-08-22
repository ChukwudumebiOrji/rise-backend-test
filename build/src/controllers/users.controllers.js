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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const users_model_1 = __importDefault(require("../models/users.model"));
class UsersController {
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            bcrypt_1.default.hash(req.body.password, 10, function (err, hash) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (err)
                        console.log(err);
                    else
                        yield users_model_1.default.create({
                            full_name: req.body.full_name,
                            email: req.body.email,
                            password: hash,
                        });
                    res.send(`User ${req.body.email} created`);
                });
            });
        });
    }
}
exports.default = new UsersController();
