import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthRequestType, AuthResponse } from '../../data/auth.types';
import { catchError, of, switchMap, tap, throwError } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import { loginDoctor, loginPatient } from '../../../store/user/user.actions';
import { Doctor, Patient } from '../../../store/user/user.model';

@Injectable({
  providedIn: 'root',
})
export class LoginApiService {
  private readonly baseApiUrl = 'http://localhost:8080/api/';
  access_token: string | null = null;
  refresh_token: string | null = null;

  constructor(
    private readonly router: Router,
    private readonly httpClient: HttpClient,
    private readonly cookieService: CookieService,
    private store: Store<AppState>
  ) {}

  get isUserAuth() {
    if (!this.access_token) {
      this.access_token = this.cookieService.get('access_token');
    }
    return this.access_token;
  }

  patientLogin(data: AuthRequestType) {
    this.cookieService.deleteAll();
    return this.httpClient
      .post<AuthResponse>(`${this.baseApiUrl}login`, data)
      .pipe(
        tap((value) => {
          this.saveTokensToCookie(value, 'patient');
        }),
        switchMap(() => this.fetchPatientData()),
        tap(() => this.router.navigate(['home'])),
        catchError((error) => {
          console.log(error);
          return throwError(() => error);
        })
      );
  }

  doctorLogin(data: AuthRequestType) {
    this.cookieService.deleteAll();
    return this.httpClient
      .post<AuthResponse>(`${this.baseApiUrl}stuff/login`, data)
      .pipe(
        tap((value) => {
          this.saveTokensToCookie(value, 'doctor');
        }),
        switchMap(() => this.fetchDoctorData()),
        tap(() => this.router.navigate(['stuff'])),
        catchError((error) => {
          console.log(error);
          return throwError(() => error);
        })
      );
  }

  loadUserData() {
    const current_role = this.cookieService.get('current_role');
    this.access_token = this.cookieService.get('access_token');
    if (this.access_token && current_role === 'patient') {
      this.fetchPatientData().subscribe();
    } else if (this.access_token && current_role === 'doctor') {
      this.fetchDoctorData().subscribe();
    }
  }

  private fetchPatientData() {
    return this.httpClient
      .get<Patient>(`${this.baseApiUrl}patient/profile`, {
        headers: { Authorization: `bearer ${this.access_token}` },
      })
      .pipe(
        tap((patient) => {
          this.store.dispatch(loginPatient({ patient })),
            catchError((error) => {
              console.error('Error fetching user data', error);
              return of(null);
            });
        })
      );
  }

  private fetchDoctorData() {
    return this.httpClient
      .get<Doctor>(`${this.baseApiUrl}doctors/profile`, {
        headers: { Authorization: `bearer ${this.access_token}` },
      })
      .pipe(
        tap((doctor) => {
          this.store.dispatch(loginDoctor({ doctor })),
            catchError((error) => {
              console.error('Error fetching user data', error);
              return of(null);
            });
        })
      );
  }

  logoutUser() {
    this.cookieService.deleteAll();
    this.router.navigate(['']);
    window.location.reload();
  }

  private saveTokensToCookie(res: AuthResponse, role: 'doctor' | 'patient') {
    this.access_token = res.accessToken;
    this.refresh_token = res.refreshToken;

    this.cookieService.delete('access_token');
    this.cookieService.set('access_token', this.access_token);
    this.cookieService.delete('refresh_token');
    this.cookieService.set('refresh_token', this.refresh_token);
    this.cookieService.set('current_role', role);
  }
}
