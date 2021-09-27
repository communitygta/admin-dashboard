/* eslint-disable @typescript-eslint/naming-convention */
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

  updatePassword(payload: {
    old_password: string;
    new_password: string;
  }): Observable<any> {
    return this.http.put(API.PREFIX + API.UPDATE_PASSWORD, payload);
  }

  logout(): Observable<any> {
    return this.http.post(API.PREFIX + API.LOGOUT, null).pipe(
      map(() => {
        localStorage.clear();
        this.isAuth$.next(false);
      })
    );
  }

  getAllUsersBySuperUser(): Observable<any> {
    return this.http.get(API.PREFIX + API.GET_ALL_USERS);
  }

  getUserBySuperUser(userId): Observable<any> {
    return this.http.get(API.PREFIX + API.GET_ALL_USERS + `${userId}/`);
  }

  getUsersByNeighbourhood(): Observable<any> {
    return this.http.get(API.PREFIX + API.GET_USERS_BY_NEIGHBOURHOOD);
  }

  getUserByNeighbourhood(userId): Observable<any> {
    return this.http.get(
      API.PREFIX + API.GET_USERS_BY_NEIGHBOURHOOD + `${userId}/`
    );
  }

  updateUserProfileBySuperUser(profileId, payload): Observable<any> {
    return this.http.put(
      API.PREFIX + API.UPDATE_PROFILE_BY_SUPER_USER + `${profileId}/`,
      payload
    );
  }

  deleteUserProfileBySuperUser(profileId): Observable<any> {
    return this.http.delete(
      API.PREFIX + API.DELETE_USER_BY_SUPER_USER + `${profileId}/`
    );
  }

  updateUserProfileByNeighbourhoodAdmin(profileId, payload): Observable<any> {
    return this.http.put(
      API.PREFIX + API.UPDATE_PROFILE_BY_NEIGHBOURHOOD_ADMIN + `${profileId}/`,
      payload
    );
  }

  createUserByAdmin(userInfo): Observable<any> {
    return this.http.post(API.PREFIX + API.CREATE_USER_BY_ADMIN, userInfo);
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
