import express from 'express';
import Response from '../utils/Response';
import generateAccountNumber from '../utils/generateAccountNumber';

interface Account {
  accountNumber: string;
  holderName: string;
  dob: string;
  accountType: string;
  balance?: number;
}

const accounts: Account[] = [];

class AccountController {
  // Create a Bank Account
  static async createAccount(req: express.Request, res: express.Response) {
    try {
      const { holderName, dob, accountType, initialBalance } = req.body;

      // Basic input validation
      if (
        !holderName ||
        !dob ||
        !accountType ||
        initialBalance === undefined ||
        initialBalance < 0
      ) {
        const response = new Response(false, 400, 'Invalid input');
        return res.status(response.code).json(response);
      }

      // Generate a unique 10-digit account number
      const accountNumber = generateAccountNumber();

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

      const response = new Response(
        true,
        201,
        'Account created successfully',
        newAccount
      );
      return res.status(response.code).json(response);
    } catch (error) {
      console.log(error);
      const response = new Response(
        false,
        500,
        'Server error, Please try again later'
      );
      return res.status(response.code).json(response);
    }
  }

  // Resolve a Bank Account
  static async resolveAccount(req: express.Request, res: express.Response) {
    const accountNumber = req.params.accountNumber;

    // Find the account in the database by account number
    const account = accounts.find((acc) => acc.accountNumber === accountNumber);

    if (!account) {
      const response = new Response(true, 404, 'Account not found');
      return res.status(response.code).json(response);
    }

    // Return the account details
    const response = new Response(
      true,
      200,
      'Account resolved successfully',
      account
    );
    return res.status(response.code).json(response);
  }

  // Fetch All Bank Accounts
  static async getAllAccounts(req: express.Request, res: express.Response) {
    const response = new Response(
      true,
      200,
      'Account retrieved successfully',
      accounts
    );
    return res.status(response.code).json(response);
  }
}

export default AccountController;
