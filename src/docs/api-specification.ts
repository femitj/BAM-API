import { resolve } from 'path';
import envConfig from '../config/envConfig';

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'BAM',
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
        url: '',
        description: 'Production Server',
      },
      {
        url: 'https://bam.herokuapp.com/api/v1',
        description: 'Staging Server',
      },
      {
        url: `http://localhost:${envConfig.PORT}/api/v1`,
        description: 'Local Host',
      },
    ],
  },
  apis: [
    resolve(__dirname, '../docs/resources/*.yaml'),
    resolve(__dirname, '../routes/*.ts'),
  ],
};

export default options;
