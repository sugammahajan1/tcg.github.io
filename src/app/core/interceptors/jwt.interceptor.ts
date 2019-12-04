import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdminService } from 'src/app/services/admin/admin.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private admin: AdminService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    /********** add authorization header with jwt token if available **********/
    let token: string = this.admin.userToken;
    if (token) {
      request = request.clone({
        headers: new HttpHeaders({
          Authorization: `Bearer ${token}`
        })
      });
    }

    return next.handle(request);
  }
}