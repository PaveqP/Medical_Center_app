import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { DoctorsResponse, PayloadSpecialization } from '../../data/user.types';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  private readonly baseUrl = 'http://localhost:8080/api/';
  private readonly access_token: string;

  constructor(
    private readonly httpClient: HttpClient,
    private readonly cookieService: CookieService
  ) {
    this.access_token = this.cookieService.get('access_token');
  }

  getDoctorsBySpecialization(payload: PayloadSpecialization) {
    return this.httpClient
      .get<DoctorsResponse>(
        `${this.baseUrl}doctors/specialization/${payload.specialization}`,
        {
          headers: { Authorization: `bearer ${this.access_token}` },
        }
      )
      .pipe(
        catchError((error) => {
          console.error('Error fetching data', error);
          return of(null);
        })
      );
  }
}
