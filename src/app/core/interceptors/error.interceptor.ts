import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'An unknown error occurred!';

        if (error.error instanceof ErrorEvent) {
          // Client-side or network error
          errorMessage = `Client-side error: ${error.error.message}`;
        } else {
          // Server-side error
          switch (error.status) {
            case 400:
              errorMessage = 'Bad Request. Please check your input.';
              break;
            case 401:
              errorMessage = 'Unauthorized. Please log in.';
              this.router.navigate(['/login']); // Example navigation
              break;
            case 404:
              errorMessage = 'Resource not found.';
              this.router.navigate(['/404']); // Navigate to a custom 404 page
              break;
            case 500:
              errorMessage = 'Internal server error.';
              break;
            default:
              errorMessage = `Error: ${error.statusText} (${error.status})`;
          }
        }

        // Optionally display the error to the user
        alert(errorMessage);

        return throwError(() => new Error(errorMessage));
      })
    );
  }
}
