import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { IVisitsResponse } from '../../patient-home/data/patient.types';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StuffHomeApiService {
  private readonly baseUrl = 'http://localhost:8080/api/doctors/consultations/';
  private readonly access_token: string;

  constructor(
    private readonly httpClient: HttpClient,
    private readonly cookieService: CookieService
  ) {
    this.access_token = this.cookieService.get('access_token');
  }

  getPastConsultations() {
    return this.httpClient
      .get<IVisitsResponse[]>(`${this.baseUrl}past`, {
        headers: { Authorization: `bearer ${this.access_token}` },
      })
      .pipe(
        catchError((error) => {
          console.error('Error fetching user past consultations data', error);
          return of(null);
        })
      );
  }

  getFutureConsultations() {
    return this.httpClient
      .get<IVisitsResponse[]>(`${this.baseUrl}future`, {
        headers: { Authorization: `bearer ${this.access_token}` },
      })
      .pipe(
        catchError((error) => {
          console.error('Error fetching user future consultations data', error);
          return of(null);
        })
      );
  }
}
