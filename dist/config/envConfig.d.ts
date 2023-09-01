declare const envConfig: {
    PORT: string | number;
    database: {
        dialect: string;
        DB_DEV_NAME: string;
        DB_USER_NAME: string;
        DB_PASSWORD: string;
        DB_PORT: string;
        DB_HOST: string;
        DB_TEST_NAME: string;
        DB_TEST_USER_NAME: string;
        DB_TEST_PASSWORD: string;
        DB_TEST_HOST: string;
        DB_TEST_PORT: string;
        PRODUCTION_USERNAME: string;
        PRODUCTION_PASSWORD: string;
        PRODUCTION_HOST: string;
        PRODUCTION_DATABASE: string;
        PRODUCTION_PORT: string;
    };
    debug: boolean;
    env: string;
};
export default envConfig;
