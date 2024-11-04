import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { IConsultation } from '../data/consultation.types';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PatientDetailsApiService {
  private readonly baseUrl = 'http://localhost:8080/api/patient/';
  private readonly access_token: string;

  constructor(
    private readonly httpClient: HttpClient,
    private readonly cookieService: CookieService
  ) {
    this.access_token = this.cookieService.get('access_token');
  }

  createConsultation(data: IConsultation) {
    return this.httpClient
      .post(`${this.baseUrl}consultation/create`, data, {
        headers: { Authorization: `bearer ${this.access_token}` },
      })
      .pipe(
        catchError((error) => {
          console.error('Error add consultation', error);
          return of(null);
        })
      );
  }
}
