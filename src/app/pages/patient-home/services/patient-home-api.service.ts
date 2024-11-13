import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { IVisitsResponse } from '../data/patient.types';
import { catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PatientHomeApiService {
  private readonly baseUrl = 'http://localhost:8080/api/patient/visits';
  private readonly access_token: string;

  constructor(
    private readonly httpClient: HttpClient,
    private readonly cookieService: CookieService
  ) {
    this.access_token = this.cookieService.get('access_token');
  }

  getPatientAllVisits() {
    return this.httpClient
      .get<IVisitsResponse[]>(`${this.baseUrl}`, {
        headers: { Authorization: `bearer ${this.access_token}` },
      })
      .pipe(
        catchError((error) => {
          console.error('Error fetching user visits data', error);
          return of(null);
        })
      );
  }

  getPatientPastVisits() {
    return this.httpClient
      .get<IVisitsResponse[]>(`${this.baseUrl}/past`, {
        headers: { Authorization: `bearer ${this.access_token}` },
      })
      .pipe(
        catchError((error) => {
          console.error('Error fetching user past visits data', error);
          return of(null);
        })
      );
  }

  getPatientFutureVisits() {
    return this.httpClient
      .get<IVisitsResponse[]>(`${this.baseUrl}/future`, {
        headers: { Authorization: `bearer ${this.access_token}` },
      })
      .pipe(
        catchError((error) => {
          console.error('Error fetching user future visits data', error);
          return of(null);
        })
      );
  }
}
