"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const Response_1 = require("../utils/Response");
/**
 * Schema validator
 * @param {Array} schemas
 * @param {number} status
 * @returns {Array} an array of validation schema and middleware
 */
exports.default = (schemas) => {
    const validatorCheck = async (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        req = Object.assign(Object.assign({}, req), (0, express_validator_1.matchedData)(req));
        if (!errors.isEmpty()) {
            const mapErrors = Object.entries(errors.mapped()).reduce((accumulator, [key, value]) => {
                // @ts-ignore
                accumulator[key] = value.msg;
                return accumulator;
            }, {});
            const response = new Response_1.ValidationErrorResponse(400, 'Validation Error!', mapErrors);
            return res.status(response.code).json(response);
        }
        return next();
    };
    return [...(schemas.length && [schemas]), validatorCheck];
};
//# sourceMappingURL=validator.js.map