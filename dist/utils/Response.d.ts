declare class Response {
    status: boolean;
    code: number;
    message: string;
    data?: any;
    constructor(status: boolean, code: number, message: string, data?: any);
}
export declare class ErrorResponse {
    status: boolean;
    code: number;
    message: string;
    constructor(code: number, message: string);
}
export declare class ValidationErrorResponse {
    status: boolean;
    code: number;
    message: string;
    data: any;
    constructor(code: number, message: string, data: any);
}
export default Response;
