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
    const daysInCurrentMonth = new Date(
      this.currentYear as number,
      (this.currentMonth as number) + 1,
      0
    ).getDate();

    for (let day = 1; day <= daysInCurrentMonth; day++) {
      const date = new Date(
        this.currentYear as number,
        this.currentMonth as number,
        day
      );
      const dayOfWeek = date.toLocaleDateString('ru-RU', { weekday: 'long' });

      this.days.push({ date: day, dayOfWeek });
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
                const fullDate = `${this.currentYear}-${
                  (this.currentMonth as number) + 1
                }-${day.date < 10 ? '0' + day.date : day.date}`;
                const findDay = consultations?.filter(
                  (consultation) => consultation.date === fullDate
                );
                if (findDay && findDay.length > 0) {
                  return { ...day, time: findDay };
                }
                return day;
              });
            })
          )
          .subscribe((val) => {
            console.log(this.days);
          });
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
