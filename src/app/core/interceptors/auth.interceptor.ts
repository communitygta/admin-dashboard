import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authServive: AuthService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.authServive.isAuth$.getValue()) {
      const token = localStorage.getItem('token');
      const clone = request.clone({
        setHeaders: {
          authorization: `Token ${token}`,
        },
      });
      return next.handle(clone);
    }

    return next.handle(request);
  }
}
