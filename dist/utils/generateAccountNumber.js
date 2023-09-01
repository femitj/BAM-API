"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Generate a unique 10-digit account number
const generateAccountNumber = () => {
    const min = 1000000000;
    const max = 9999999999;
    const accountNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return accountNumber.toString();
};
exports.default = generateAccountNumber;
//# sourceMappingURL=generateAccountNumber.js.map