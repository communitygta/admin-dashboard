import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private authService: AuthService) {}

  initApp(): Promise<any> {
    // only works with promises
    // https://github.com/angular/angular/issues/15088
    return new Promise((resolve) => {
      forkJoin([this.getUserProfile()])
        .pipe(
          // 接收其他拦截器后产生的异常消息
          catchError(([userProfile]) => {
            resolve(null);
            return [userProfile];
          })
        )
        .subscribe(
          // success
          ([userProfile]) => {
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

  getUserProfile(): Observable<any> {
    if (this.authService.isAuth$.getValue()) {
      return this.authService.getUserProfile();
    } else {
      return of(null);
    }
  }
}
