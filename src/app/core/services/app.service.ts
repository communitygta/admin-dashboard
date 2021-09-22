import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, forkJoin, Observable, of } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { API } from '../constants/api.constant';
import { AppInfo } from '../models/app.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  appData: AppInfo;
  constructor(private http: HttpClient, private authService: AuthService) {}

  initApp(): Promise<any> {
    // only works with promises
    // https://github.com/angular/angular/issues/15088
    return new Promise((resolve) => {
      forkJoin([this.getAppInfo(), this.getUserProfile()])
        .pipe(
          // 接收其他拦截器后产生的异常消息
          catchError(([appData, userProfile]) => {
            resolve(null);
            return [appData, userProfile];
          })
        )
        .subscribe(
          // success
          ([appData, userProfile]) => {
            this.appData = appData;
            this.authService.userProfile$.next(userProfile);
          },
          // error
          () => {},
          // complete
          () => {
            resolve(null);
          }
        );
    });
  }

  getAppInfo(): Observable<any> {
    return this.http.get(API.PREFIX + API.APP_INFO).pipe(
      retry(3),
      catchError(() => EMPTY)
    );
  }

  getUserProfile(): Observable<any> {
    if (this.authService.isAuth$.getValue()) {
      return this.authService.getUserProfile();
    } else {
      return of(null);
    }
  }
}
