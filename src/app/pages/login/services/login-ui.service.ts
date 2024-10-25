import { Injectable } from '@angular/core';
import { LoginApiService } from './login-api.service';

@Injectable({
  providedIn: 'root',
})
export class LoginUiService {
  constructor(private readonly apiService: LoginApiService) {}

  patientLogin(data: { email: string; password: string }) {
    return this.apiService.patientLogin(data);
  }
}
