import { Injectable } from '@angular/core';
import { DateApiService } from './date-api.service';
import { map, Observable } from 'rxjs';
import { IConsultation, ITimeTable } from '../data/doctor.types';
import { NzModalService } from 'ng-zorro-antd/modal';
import { DateModalComponent } from '../date-modal/date-modal.component';
import { Day } from '../select-date.component';

@Injectable({
  providedIn: 'root',
})
export class DateUiService {
  constructor(
    private readonly apiService: DateApiService,
    private modal: NzModalService
  ) {}

  getDoctorTimeTable(id: number): Observable<ITimeTable[] | null> {
    return this.apiService.getDoctorTimeTable(id);
  }

  getDoctorConsultations(id: number): Observable<IConsultation[] | null> {
    return this.apiService.getDoctorConsultations(id);
  }

  createDateModal(day: Day): void {
    this.modal.create<DateModalComponent, Day>({
      nzTitle: `${day.date < 10 ? '0' + day.date : day.date} - ${
        day.dayOfWeek
      }. Режим работы: ${day.start_time} - ${day.end_time}`,
      nzContent: DateModalComponent,
      nzData: day,
    });
  }
}
