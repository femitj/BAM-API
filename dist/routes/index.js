"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const swagger_jsdoc_1 = tslib_1.__importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = require("swagger-ui-express");
const api_specification_1 = tslib_1.__importDefault(require("../docs/api-specification"));
const AccountController_1 = tslib_1.__importDefault(require("../controllers/AccountController"));
const validator_1 = tslib_1.__importDefault(require("../middlewares/validator"));
const bankSchema_1 = require("../validations/bankSchema");
const specs = (0, swagger_jsdoc_1.default)(api_specification_1.default);
const router = (0, express_1.Router)();
const prefix = '/api/v1';
const apiDocs = '/api/docs';
const specsConfig = (0, swagger_ui_express_1.setup)(specs, {
    explorer: false,
    customSiteTitle: 'BAM API',
});
router.use(apiDocs, swagger_ui_express_1.serve);
router.use(apiDocs, specsConfig);
/**
 * @swagger
 *
 * /create-account:
 *   post:
 *     security: []
 *     summary: Create account
 *     description: Creates an account
 *     tags:
 *       - Account
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               holderName:
 *                 type: string
 *               dob:
 *                 type: string
 *               accountType:
 *                 type: string
 *               initialBalance:
 *                 type: integer
 *     produces:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *               message:
 *                 type: string
 *               data:
 *                 type: object
 *                 properties:
 *                   accountNumber:
 *                     type: string
 *                   holderName:
 *                     type: string
 *                   dob:
 *                     type: string
 *                   accountType:
 *                     type: string
 *                   initialBalance:
 *                     type: integer
 *     responses:
 *       201:
 *         description: Account created successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error, Please try again later
 */
router.post(`${prefix}/create-account`, (0, validator_1.default)(bankSchema_1.schema), AccountController_1.default.createAccount);
/**
 * @swagger
 *
 * /account/{accountNumber}:
 *   get:
 *     security: []
 *     summary: Resolve Account
 *     description: Get account information of an account number
 *     tags:
 *       - Account
 *     produces:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *               message:
 *                 type: string
 *               data:
 *                 type: object
 *     parameters:
 *      - in: path
 *        name: accountNumber
 *        description: Account number
 *        type: string
 *     responses:
 *       200:
 *         description: Account resolved successfully
 */
router.get(`${prefix}/account/:accountNumber`, (0, validator_1.default)(bankSchema_1.resolveAccSchema), AccountController_1.default.resolveAccount);
/**
 * @swagger
 *
 * /accounts:
 *   get:
 *     security: []
 *     summary: Get Accounts
 *     description: Get all existing accounts
 *     tags:
 *       - Account
 *     produces:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *               message:
 *                 type: string
 *               data:
 *                 type: array
 *     responses:
 *       200:
 *         description: Account retrieved successfully
 */
router.get(`${prefix}/accounts`, AccountController_1.default.getAllAccounts);
exports.default = router;
//# sourceMappingURL=index.js.map