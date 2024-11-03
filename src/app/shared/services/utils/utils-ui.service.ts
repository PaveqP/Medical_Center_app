import { Injectable } from '@angular/core';
import { UtilsApiService } from './utils-api.service';

@Injectable({
  providedIn: 'root',
})
export class UtilsUiService {
  constructor(private readonly apiService: UtilsApiService) {}

  getSpecializations() {
    return this.apiService.getSpecializations();
  }
}
