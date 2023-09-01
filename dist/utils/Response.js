"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationErrorResponse = exports.ErrorResponse = void 0;
class Response {
    constructor(status, code, message, data) {
        this.status = status;
        this.code = code;
        this.message = message;
        this.data = data;
    }
}
class ErrorResponse {
    constructor(code, message) {
        this.status = false;
        this.code = code;
        this.message = message;
    }
}
exports.ErrorResponse = ErrorResponse;
class ValidationErrorResponse {
    constructor(code, message, data) {
        this.status = false;
        this.code = code;
        this.message = message;
        this.data = data;
    }
}
exports.ValidationErrorResponse = ValidationErrorResponse;
exports.default = Response;
//# sourceMappingURL=Response.js.map