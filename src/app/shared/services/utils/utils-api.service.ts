import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { catchError, of, tap } from 'rxjs';
import {
  IConclusion,
  Specialization,
} from '../../../store/application/application.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import { Specializations } from '../../../store/application/application.actions';

@Injectable({
  providedIn: 'root',
})
export class UtilsApiService {
  private readonly baseUrl = 'http://localhost:8080/api/';
  private readonly access_token: string;

  constructor(
    private readonly httpClient: HttpClient,
    private readonly cookieService: CookieService,
    private store: Store<AppState>
  ) {
    this.access_token = this.cookieService.get('access_token');
  }

  getSpecializations() {
    return this.httpClient
      .get<Specialization[]>(`${this.baseUrl}specializations`, {
        headers: { Authorization: `bearer ${this.access_token}` },
      })
      .pipe(
        tap((response) => {
          this.store.dispatch(Specializations({ specializations: response }));
        }),
        catchError((error) => {
          console.error('Error fetching user data', error);
          return of(null);
        })
      );
  }

  getConclusionById(id: number) {
    return this.httpClient
      .get<IConclusion>(`${this.baseUrl}conclusion/${id}`, {
        headers: { Authorization: `bearer ${this.access_token}` },
      })
      .pipe(
        catchError((error) => {
          console.error('Error fetching conclusion data', error);
          return of(null);
        })
      );
  }
}
