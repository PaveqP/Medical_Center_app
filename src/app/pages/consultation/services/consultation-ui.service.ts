import { Injectable } from '@angular/core';
import {
  completeData,
  ConsultationApiService,
} from './consultation-api.service';

@Injectable({
  providedIn: 'root',
})
export class ConsultationUiService {
  constructor(private readonly apiService: ConsultationApiService) {}

  getConsultationById(id: number) {
    return this.apiService.getConsultationById(id);
  }

  completeConsultation(completeData: completeData) {
    return this.apiService.completeConsultation(completeData);
  }
}
