import { Injectable } from '@angular/core';
import { StuffHomeApiService } from './stuff-home-api.service';

@Injectable({
  providedIn: 'root',
})
export class StuffHomeUiService {
  constructor(private readonly apiService: StuffHomeApiService) {}

  getFutureConsultations() {
    return this.apiService.getFutureConsultations();
  }

  getPastConsultations() {
    return this.apiService.getPastConsultations();
  }
}
