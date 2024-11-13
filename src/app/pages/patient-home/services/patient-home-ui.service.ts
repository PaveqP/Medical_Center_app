import { Injectable } from '@angular/core';
import { PatientHomeApiService } from './patient-home-api.service';
import { Patient } from '../../../store/user/user.model';
import { UserApiService } from '../../../shared/services/user/user-api.service';
import { UserUiService } from '../../../shared/services/user/user-ui.service';

@Injectable({
  providedIn: 'root',
})
export class PatientHomeUiService {
  constructor(
    private readonly apiService: PatientHomeApiService,
    private readonly userUiService: UserUiService
  ) {}

  getPatientAllVisits() {
    return this.apiService.getPatientAllVisits();
  }

  getPatientPastVisits() {
    return this.apiService.getPatientPastVisits();
  }

  getPatientFutureVisits() {
    return this.apiService.getPatientFutureVisits();
  }

  createUserModal(user: Patient) {
    this.userUiService.createUserProfileModal(user);
  }
}
