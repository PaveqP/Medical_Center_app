import { Component } from '@angular/core';
import { DateUiService } from './services/date-ui.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { selectSelectedDoctor } from '../../store/application/application.selectors';
import { IConsultation, ITimeTable } from './data/doctor.types';
import { map, tap } from 'rxjs';

export type Day = {
  date: number;
  dayOfWeek: string;
  id?: number;
  day?: string;
  fulldate: string;
  start_time?: string;
  end_time?: string;
  time?: IConsultation[];
};

@Component({
  selector: 'app-select-date',
  templateUrl: './select-date.component.html',
  styleUrl: './select-date.component.scss',
})
export class SelectDateComponent {
  protected days: Day[] = [];
  protected timetable: ITimeTable[] | null = [];
  protected readonly weekends = ['суббота', 'воскресенье'];

  private currentDate: Date | string | null = null;
  private currentYear: Date | number | null = null;
  private currentMonth: Date | number | null = null;

  constructor(
    private readonly uiService: DateUiService,
    private store: Store<AppState>
  ) {
    this.currentDate = new Date();
    this.currentYear = this.currentDate.getFullYear();
    this.currentMonth = this.currentDate.getMonth();
    this.createCalendar();
    this.getDoctorTimeTable();
  }

  createCalendar() {
    const startDate = new Date();
    const daysInFuture = 30;

    this.days = [];

    for (let i = 0; i < daysInFuture; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);

      const day = date.getDate();
      const dayOfWeek = date.toLocaleDateString('ru-RU', { weekday: 'long' });
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      this.days.push({
        date: day,
        dayOfWeek,
        fulldate: `${year}-${month < 10 ? '0' + month : month}-${
          day < 10 ? '0' + day : day
        }`,
      });
    }
  }

  getDoctorTimeTable() {
    this.store
      .select(selectSelectedDoctor)
      .pipe(
        map((value) => {
          if (!value) {
            const storedDoctor = localStorage.getItem('doctor');
            return storedDoctor ? JSON.parse(storedDoctor) : null;
          }
          return value;
        })
      )
      .subscribe((doctor) => {
        this.uiService
          .getDoctorTimeTable(doctor!.id)
          .pipe(
            tap((timetable) => {
              this.days = this.days.map((day) => {
                const findDay = timetable?.find(
                  (data) => data.day.toLowerCase() === day.dayOfWeek
                );
                if (findDay) {
                  return { ...day, ...findDay };
                }
                return day;
              });
            })
          )
          .subscribe((timetable) => {
            this.timetable = timetable;
          });
        this.uiService
          .getDoctorConsultations(doctor!.id)
          .pipe(
            tap((consultations) => {
              console.log(consultations);
              this.days = this.days.map((day) => {
                const findDay = consultations?.filter(
                  (consultation) => consultation.date === day.fulldate
                );
                if (findDay && findDay.length > 0) {
                  return { ...day, time: findDay };
                }
                return day;
              });
            })
          )
          .subscribe();
      });
  }

  protected findDayData(day: Day): ITimeTable | boolean {
    const dayData = this.timetable?.filter(
      (elem) => elem.day.toLowerCase() === day.dayOfWeek
    );
    if (dayData && dayData?.length !== 0) {
      return dayData[0];
    }
    return false;
  }

  protected createDateModal(day: Day) {
    this.uiService.createDateModal(day);
  }
}
