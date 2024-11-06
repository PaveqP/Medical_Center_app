import { Injectable } from '@angular/core';
import { PatientHomeApiService } from './patient-home-api.service';

@Injectable({
  providedIn: 'root',
})
export class PatientHomeUiService {
  constructor(private readonly apiService: PatientHomeApiService) {}

  getPatientAllVisits() {
    return this.apiService.getPatientAllVisits();
  }

  getPatientPastVisits() {
    return this.apiService.getPatientPastVisits();
  }

  getPatientFutureVisits() {
    return this.apiService.getPatientFutureVisits();
  }
}
