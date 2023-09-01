declare const options: {
    swaggerDefinition: {
        openapi: string;
        info: {
            title: string;
            version: string;
            description: string;
            license: {
                name: string;
                url: string;
            };
            contact: {
                name: string;
                url: string;
            };
        };
        security: {
            bearerAuth: any[];
        }[];
        servers: {
            url: string;
            description: string;
        }[];
    };
    apis: string[];
};
export default options;
