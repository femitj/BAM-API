import express from 'express';
declare class AccountController {
    static createAccount(req: express.Request, res: express.Response): Promise<express.Response<any, Record<string, any>>>;
    static resolveAccount(req: express.Request, res: express.Response): Promise<express.Response<any, Record<string, any>>>;
    static getAllAccounts(req: express.Request, res: express.Response): Promise<express.Response<any, Record<string, any>>>;
}
export default AccountController;
