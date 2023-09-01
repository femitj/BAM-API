import { Router } from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import { serve, setup } from 'swagger-ui-express';
import swaggerDefinition from '../docs/api-specification';
import AccountController from '../controllers/AccountController';
import validator from '../middlewares/validator';
import { resolveAccSchema, schema } from '@/validations/bankSchema';

const specs = swaggerJsdoc(swaggerDefinition);
const router = Router();

const prefix = '/api/v1';
const apiDocs = '/api/docs';
const specsConfig = setup(specs, {
  explorer: false,
  customSiteTitle: 'BAM API',
});

router.use(apiDocs, serve);
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
router.post(
  `${prefix}/create-account`,
  validator(schema),
  AccountController.createAccount
);

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
router.get(
  `${prefix}/account/:accountNumber`,
  validator(resolveAccSchema),
  AccountController.resolveAccount
);

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
router.get(`${prefix}/accounts`, AccountController.getAllAccounts);

export default router;
