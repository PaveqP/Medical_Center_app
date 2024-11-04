import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ITimeTable, IConsultation } from '../data/doctor.types';
import { catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DateApiService {
  private readonly baseUrl = 'http://localhost:8080/api/doctors';
  private readonly access_token: string;

  constructor(
    private readonly httpClient: HttpClient,
    private readonly cookieService: CookieService
  ) {
    this.access_token = this.cookieService.get('access_token');
    console.log(this.access_token);
  }

  getDoctorTimeTable(id: number) {
    return this.httpClient
      .get<ITimeTable[]>(`${this.baseUrl}/${id}/timetable`, {
        headers: { Authorization: `bearer ${this.access_token}` },
      })
      .pipe(
        catchError((error) => {
          console.error('Error fetching user data', error);
          return of(null);
        })
      );
  }

  getDoctorConsultations(id: number) {
    return this.httpClient
      .get<IConsultation[]>(`${this.baseUrl}/${id}/consultations`, {
        headers: { Authorization: `bearer ${this.access_token}` },
      })
      .pipe(
        catchError((error) => {
          console.error('Error fetching user data', error);
          return of(null);
        })
      );
  }
}
