import { MessagingService } from 'src/app/services/messaging/messaging.service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AdminService } from 'src/app/services/admin/admin.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private admin: AdminService,
    private message: MessagingService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {

      switch (err.status) {

        case 401:
          /********** Auto logout if 401 response returned from api **********/
          this.admin.removeUser();
          setTimeout(() => {
            this.message.alert('error', 'OOPS!', 'Sorry, your account has been logged in other device! Please login again to continue.');
          }, 400);
          break;

        case 0:
          /********** If server dosent respond **********/
          this.message.alert('error', 'OOPS!', 'HTTP Error Response.');
          break;

        default:
          /********** Check for other serve-side errors **********/
          this.message.toast('error', err.error.message);
          break;
      }
      console.log(err);

      const error = err.error.message || err.statusText;
      return throwError(error);
    }))
  }
}