"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Response_1 = tslib_1.__importDefault(require("../utils/Response"));
const generateAccountNumber_1 = tslib_1.__importDefault(require("../utils/generateAccountNumber"));
const accounts = [];
class AccountController {
    // Create a Bank Account
    static async createAccount(req, res) {
        try {
            const { holderName, dob, accountType, initialBalance } = req.body;
            // Basic input validation
            if (!holderName ||
                !dob ||
                !accountType ||
                initialBalance === undefined ||
                initialBalance < 0) {
                const response = new Response_1.default(false, 400, 'Invalid input');
                return res.status(response.code).json(response);
            }
            // Generate a unique 10-digit account number
            const accountNumber = (0, generateAccountNumber_1.default)();
            // Create a new account object
            const newAccount = {
                bankName: 'LOTUS BANK',
                accountNumber,
                holderName,
                dob,
                accountType,
                balance: initialBalance,
            };
            // Store the account details in the database
            accounts.push(newAccount);
            delete newAccount.dob;
            const response = new Response_1.default(true, 201, 'Account created successfully', newAccount);
            return res.status(response.code).json(response);
        }
        catch (error) {
            console.log(error);
            const response = new Response_1.default(false, 500, 'Server error, Please try again later');
            return res.status(response.code).json(response);
        }
    }
    // Resolve a Bank Account
    static async resolveAccount(req, res) {
        const accountNumber = req.params.accountNumber;
        // Find the account in the database by account number
        const account = accounts.find((acc) => acc.accountNumber === accountNumber);
        if (!account) {
            const response = new Response_1.default(true, 404, 'Account not found');
            return res.status(response.code).json(response);
        }
        // Return the account details
        const response = new Response_1.default(true, 200, 'Account resolved successfully', account);
        return res.status(response.code).json(response);
    }
    // Fetch All Bank Accounts
    static async getAllAccounts(req, res) {
        const response = new Response_1.default(true, 200, 'Account retrieved successfully', accounts);
        return res.status(response.code).json(response);
    }
}
exports.default = AccountController;
//# sourceMappingURL=AccountController.js.map