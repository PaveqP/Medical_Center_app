import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthRequestType } from '../../data/auth.types';
import { catchError, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RegistrationApiService {
  private readonly baseApiUrl = 'http://localhost:8080/api/';

  constructor(
    private readonly httpClient: HttpClient,
    private readonly router: Router
  ) {}

  registration(credentials: AuthRequestType) {
    console.log('called', credentials);
    return this.httpClient
      .post<string>(`${this.baseApiUrl}registration`, credentials)
      .pipe(
        tap(() => alert('Вы будете перенаправлены на страницу авторизации')),
        tap(() => this.router.navigate(['login/patient'])),
        catchError((error) => {
          console.log(error);
          return throwError(() => error);
        })
      );
  }
}
