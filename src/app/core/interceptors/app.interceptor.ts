import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse,
  HttpEvent,
  HttpResponseBase,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { InAppMessageService } from '../services/in-app-message.service';
import { ERROR_MESSAGE } from '../constants/errors.constant';

/**
 * 默认HTTP拦截器，其注册细节见 `app.module.ts`
 */
@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(private inAppMessageService: InAppMessageService) {}

  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // 统一加上服务端前缀
    let url = req.url;
    if (
      !url.startsWith('https://') &&
      !url.startsWith('http://') &&
      !url.startsWith('assets/')
    ) {
      url = environment.appUrl + url;
    }

    const newReq = req.clone({
      url,
      headers: req.headers.set('Accept', 'application/json'),
    });

    return next.handle(newReq).pipe(
      mergeMap((event: any) => {
        // 统一对请求response处理
        if (event instanceof HttpResponseBase) {
          return this.handleData(event, newReq);
        }
        // 若一切都正常，则后续操作
        return of(event);
      }),
      catchError((err: HttpErrorResponse) => this.handleData(err, newReq))
    );
  }

  private handleData(
    response: HttpResponseBase,
    request: HttpRequest<any>
  ): Observable<any> {
    switch (response.status) {
      case 200:
        break;
      case 403:
        this.inAppMessageService.simpleToast('error.403');
        break;
      case 0:
        this.inAppMessageService.simpleToast('error.request.cancelled');
        break;
      default:
        if (response instanceof HttpErrorResponse) {
          let msg = 'Network error.';

          if (response.error && response.error.error) {
            msg = ERROR_MESSAGE[response.error.error];
          }

          if (response.error && response.error.username) {
            msg = response.error.username[0];
          }

          this.inAppMessageService.simpleToast(msg, 'middle');

          return throwError(response);
        }
        break;
    }
    return of(response);
  }
}
