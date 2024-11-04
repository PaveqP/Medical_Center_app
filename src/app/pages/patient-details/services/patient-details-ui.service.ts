import { Injectable } from '@angular/core';
import { PatientDetailsApiService } from './patient-details-api.service';
import { IConsultation } from '../data/consultation.types';

@Injectable({
  providedIn: 'root',
})
export class PatientDetailsUiService {
  constructor(private readonly apiService: PatientDetailsApiService) {}

  createConsultation(data: IConsultation) {
    return this.apiService.createConsultation(data);
  }
}
