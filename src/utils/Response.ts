class Response {
  status: boolean;
  code: number;
  message: string;
  data?: any;
  constructor(status: boolean, code: number, message: string, data?: any) {
    this.status = status;
    this.code = code;
    this.message = message;
    this.data = data;
  }
}

export class ErrorResponse {
  status: boolean;
  code: number;
  message: string;
  constructor(code: number, message: string) {
    this.status = false;
    this.code = code;
    this.message = message;
  }
}

export class ValidationErrorResponse {
  status: boolean;
  code: number;
  message: string;
  data: any;
  constructor(code: number, message: string, data: any) {
    this.status = false;
    this.code = code;
    this.message = message;
    this.data = data;
  }
}

export default Response;
