"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (error, request, response, next) => {
    const code = error.statusCode || 500;
    const message = (error === null || error === void 0 ? void 0 : error.message) || 'Unknown Error';
    response.status(code).json({ code, message });
};
exports.errorHandler = errorHandler;
