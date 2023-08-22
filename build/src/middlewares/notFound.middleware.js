"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundHandler = void 0;
const notFoundHandler = (request, response, next) => {
    const message = `${request.url}: Resource not found`;
    response.status(404).json({ code: 404, message });
};
exports.notFoundHandler = notFoundHandler;
