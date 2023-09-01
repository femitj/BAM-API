import dotenv from 'dotenv';

dotenv.config();

const {
  DB_DEV_NAME,
  DB_USER_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_HOST,
  DB_TEST_NAME,
  DB_TEST_USER_NAME,
  DB_TEST_PASSWORD,
  DB_TEST_HOST,
  DB_TEST_PORT,
  PRODUCTION_USERNAME,
  PRODUCTION_PASSWORD,
  PRODUCTION_HOST,
  PRODUCTION_DATABASE,
  PRODUCTION_PORT,
  PORT,
  NODE_ENV,
} = process.env;

const envConfig = {
  PORT: PORT || 8080,
  database: {
    dialect: 'postgres',
    DB_DEV_NAME,
    DB_USER_NAME,
    DB_PASSWORD,
    DB_PORT,
    DB_HOST,
    DB_TEST_NAME,
    DB_TEST_USER_NAME,
    DB_TEST_PASSWORD,
    DB_TEST_HOST,
    DB_TEST_PORT,
    PRODUCTION_USERNAME,
    PRODUCTION_PASSWORD,
    PRODUCTION_HOST,
    PRODUCTION_DATABASE,
    PRODUCTION_PORT,
  },
  debug: false,
  env: NODE_ENV || 'development',
};

export default envConfig;
