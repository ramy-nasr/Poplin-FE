import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {
    
  handleError(error: any): void {
    const message = error.message || 'An unexpected error occurred.';
    alert(message);
  }
}
