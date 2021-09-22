import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { API } from '../constants/api.constant';

export const TOKEN_KEY = 'token';
export enum UserRole {
  superAdmin,
  neighbourhoodAdmin,
  organizationAdmin,
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isAuth$ = new BehaviorSubject(!!localStorage.getItem(TOKEN_KEY));
  public userProfile$ = new BehaviorSubject(null);
  public userRole: UserRole;

  constructor(private http: HttpClient) {}

  login(credential: { username: string; password: string }): Observable<any> {
    return this.http.post(API.PREFIX + API.LOGIN, credential).pipe(
      switchMap((res: any) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('lastLogin', credential.username);
        this.isAuth$.next(true);
        return this.getUserProfile();
      })
    );
  }

  logout() {
    localStorage.clear();
    this.isAuth$.next(false);
  }

  getUserProfile(): Observable<any> {
    return this.http.get(API.PREFIX + API.USER_PROFILE).pipe(
      map((userProfile) => {
        this.setupUserRole(userProfile);
        this.userProfile$.next(userProfile);
        return userProfile;
      })
    );
  }

  setupUserRole(userProfile) {
    if (userProfile && userProfile.user && userProfile.user.is_superuser) {
      this.userRole = UserRole.superAdmin;
    } else if (userProfile.profile) {
      if (
        userProfile.profile.neighbourhood &&
        !userProfile.profile.organization
      ) {
        this.userRole = UserRole.neighbourhoodAdmin;
      } else if (
        !userProfile.profile.neighbourhood &&
        userProfile.profile.organization
      ) {
        this.userRole = UserRole.organizationAdmin;
      }
    }
  }
}