"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveAccSchema = exports.schema = void 0;
const tslib_1 = require("tslib");
const express_validator_1 = require("express-validator");
const capitalize_1 = tslib_1.__importDefault(require("../utils/capitalize"));
const dateRegex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
// Checking accounts
// Savings accounts
// Money market accounts (MMAs)
// Certificate of deposit accounts (CDs)
exports.schema = [
    (0, express_validator_1.check)('holderName')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Holder name is required')
        .isLength({ min: 2, max: 40 })
        .withMessage('Holder name should be between 2 to 15 characters')
        .customSanitizer((value) => (0, capitalize_1.default)(value)),
    (0, express_validator_1.check)('dob')
        .exists()
        .withMessage('Date of Birth is required')
        .matches(dateRegex)
        .withMessage("Date must be of the format 'yyyy-mm-dd'")
        .custom((value) => {
        const year = value.substring(0, 4);
        const today = new Date().getFullYear();
        if (today - year < 8) {
            return false;
        }
        return true;
    })
        .withMessage('Account holder must be 8 and above'),
    (0, express_validator_1.check)('accountType')
        .exists()
        .withMessage('Account type is required')
        .customSanitizer((value) => value.toLowerCase())
        .matches(/^(savings|checking|mma|cds)$/)
        .withMessage('Savings, Checking, MMA, CDS is the accepted value'),
    (0, express_validator_1.check)('initialBalance')
        .optional()
        .trim()
        .isNumeric()
        .withMessage('Initial balance must be numeric.'),
];
exports.resolveAccSchema = [
    (0, express_validator_1.param)('accountNumber').exists().withMessage('Account Number is required'),
];
//# sourceMappingURL=bankSchema.js.map