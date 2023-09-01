import { check, param } from 'express-validator';
import capitalize from '../utils/capitalize';

const dateRegex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;

// Checking accounts
// Savings accounts
// Money market accounts (MMAs)
// Certificate of deposit accounts (CDs)

export const schema = [
  check('holderName')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Holder name is required')
    .isLength({ min: 2, max: 40 })
    .withMessage('Holder name should be between 2 to 15 characters')
    .customSanitizer((value) => capitalize(value)),

  check('dob')
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

  check('accountType')
    .exists()
    .withMessage('Account type is required')
    .customSanitizer((value) => value.toLowerCase())
    .matches(/^(savings|checking|mma|cds)$/)
    .withMessage('Savings, Checking, MMA, CDS is the accepted value'),

  check('initialBalance')
    .optional()
    .trim()
    .isNumeric()
    .withMessage('Initial balance must be numeric.'),
];

export const resolveAccSchema = [
  param('accountNumber')
    .exists()
    .withMessage('Account Number is required')
    .isLength({ min: 10, max: 10 })
    .withMessage('Account number is invalid, 10 digit required'),
];
