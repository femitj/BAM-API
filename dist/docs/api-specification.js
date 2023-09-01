"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const path_1 = require("path");
const envConfig_1 = tslib_1.__importDefault(require("../config/envConfig"));
const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Basic Account Management',
            version: '1.0.0',
            description: 'Server-side Application for BAM',
            license: {
                name: 'MIT',
                url: 'https://choosealicense.com/licenses/mit/',
            },
            contact: {
                name: 'Tijani Oluwafemi',
                url: 'https://bam.com',
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
        servers: [
            {
                url: 'https://bam-api-p7g0.onrender.com/api/v1',
                description: 'Production Server',
            },
            {
                url: `http://localhost:${envConfig_1.default.PORT}/api/v1`,
                description: 'Local Host',
            },
        ],
    },
    apis: [
        (0, path_1.resolve)(__dirname, '../docs/resources/*.yaml'),
        (0, path_1.resolve)(__dirname, envConfig_1.default.env === 'development' ? '../routes/*.ts' : '../routes/*.js'),
    ],
};
exports.default = options;
//# sourceMappingURL=api-specification.js.map