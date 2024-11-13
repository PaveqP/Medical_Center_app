import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { IConsultationFull } from '../../patient-home/data/patient.types';
import { catchError, Observable, of } from 'rxjs';

export type completeData = {
  id: number;
  diagnosis: string;
  recommendations: string;
};
@Injectable({
  providedIn: 'root',
})
export class ConsultationApiService {
  private readonly baseUrl = 'http://localhost:8080/api/doctors/consultation/';
  private readonly access_token: string;

  constructor(
    private readonly httpClient: HttpClient,
    private readonly cookieService: CookieService
  ) {
    this.access_token = this.cookieService.get('access_token');
  }

  getConsultationById(id: number) {
    return this.httpClient
      .get<IConsultationFull>(`${this.baseUrl}${id}`, {
        headers: { Authorization: `bearer ${this.access_token}` },
      })
      .pipe(
        catchError((error) => {
          console.error(`Error fetching consultation ${id} data`, error);
          return of(null);
        })
      );
  }

  completeConsultation(completeData: completeData) {
    return this.httpClient
      .post(`${this.baseUrl}complete`, completeData, {
        headers: { Authorization: `bearer ${this.access_token}` },
      })
      .pipe(
        catchError((error) => {
          console.error('Error update consultation', error);
          return of(null);
        })
      );
  }
}
