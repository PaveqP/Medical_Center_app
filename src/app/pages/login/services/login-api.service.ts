import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthResponse } from '../data/auth.types';
import { catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginApiService {
  private readonly baseApiUrl = 'http://localhost:8080/api/';
  protected access_token: string | null = null;
  protected refresh_token: string | null = null;

  constructor(
    private readonly router: Router,
    private readonly httpClient: HttpClient,
    private readonly cookieService: CookieService
  ) {}

  get isAuth() {
    if (!this.access_token) {
      this.access_token = this.cookieService.get('access_token');
    }
    return !!this.access_token;
  }

  patientLogin(data: { email: string; password: string }) {
    return this.httpClient
      .post<AuthResponse>(`${this.baseApiUrl}login`, data)
      .pipe(
        tap((value) => {
          this.saveTokensToCookie(value);
          this.router.navigate(['home']);
        }),
        catchError((error) => {
          console.log(error);
          return throwError(() => error);
        })
      );
  }

  private saveTokensToCookie(res: AuthResponse) {
    this.access_token = res.accessToken;
    this.refresh_token = res.refreshToken;

    this.cookieService.set('access_token', this.access_token);
    this.cookieService.set('refresh_token', this.refresh_token);
  }
}
