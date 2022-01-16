export class ResponseDTO<T> {
    readonly statusCode: number;
    readonly message: string;
    readonly result?: T;
  
    constructor(message: string, result?: T, statusCode?: number) {
      this.message = message;
      this.result = result;
      this.statusCode = statusCode;
    }
  }
  
  export class ErrorResponseDTO<T> {
    readonly statusCode: number;
    readonly message: string;
    readonly error?: T;
  
    constructor(error: any) {
      this.statusCode = error.status ?? 500;
      this.message = error.message ?? error;
      this.error = error;
    }
  }