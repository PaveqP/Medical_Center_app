import { Injectable } from '@angular/core';
import { LoginApiService } from './login-api.service';
import { AuthRequestType } from '../../data/auth.types';

@Injectable({
  providedIn: 'root',
})
export class LoginUiService {
  constructor(private readonly apiService: LoginApiService) {}

  patientLogin(data: AuthRequestType) {
    return this.apiService.patientLogin(data);
  }

  doctorLogin(data: AuthRequestType) {
    return this.apiService.doctorLogin(data);
  }

  loadUserData() {
    return this.apiService.loadUserData();
  }

  logoutUser() {
    this.apiService.logoutUser();
  }

  get isUserAuth() {
    return this.apiService.isUserAuth;
  }
}
