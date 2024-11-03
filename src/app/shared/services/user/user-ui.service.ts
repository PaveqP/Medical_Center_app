import { Injectable } from '@angular/core';
import { UserApiService } from './user-api.service';
import { PayloadSpecialization } from '../../data/user.types';

@Injectable({
  providedIn: 'root',
})
export class UserUiService {
  constructor(private readonly userApiService: UserApiService) {}

  getDoctorsBySpecialization(payload: PayloadSpecialization) {
    return this.userApiService.getDoctorsBySpecialization(payload);
  }
}
