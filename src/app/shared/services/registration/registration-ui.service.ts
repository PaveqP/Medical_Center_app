import { Injectable } from '@angular/core';
import { AuthRequestType } from '../../data/auth.types';
import { RegistrationApiService } from './registration-api.service';

@Injectable({
  providedIn: 'root',
})
export class RegistrationUiService {
  constructor(private readonly apiService: RegistrationApiService) {}

  registration(credentials: AuthRequestType) {
    return this.apiService.registration(credentials);
  }
}
