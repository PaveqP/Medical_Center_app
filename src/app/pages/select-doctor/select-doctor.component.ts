import { Component } from '@angular/core';
import { UserUiService } from '../../shared/services/user/user-ui.service';
import { DoctorModel } from '../../shared/data/user.types';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { selectSelectedSpecialization } from '../../store/application/application.selectors';
import { Specialization } from '../../store/application/application.model';
import { map, tap } from 'rxjs';
import { SelectedDoctor } from '../../store/application/application.actions';

@Component({
  selector: 'app-select-doctor',
  templateUrl: './select-doctor.component.html',
  styleUrl: './select-doctor.component.scss',
})
export class SelectDoctorComponent {
  protected doctorsList: DoctorModel[] | null = [];
  protected selected_doctor: DoctorModel | null = null;

  constructor(
    private readonly uiService: UserUiService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store
      .select(selectSelectedSpecialization)
      .pipe(
        map((value) => {
          if (!value) {
            const savedValue = localStorage.getItem('specialization');
            return savedValue ? JSON.parse(savedValue) : null;
          }
          return value;
        })
      )
      .subscribe((value) => {
        console.log(value);
        this.uiService
          .getDoctorsBySpecialization({ specialization: value!.name })
          .subscribe((res) => {
            this.doctorsList = res;
          });
      });
  }

  protected selectDoctor(doctor: DoctorModel) {
    this.selected_doctor = doctor;
    this.store.dispatch(SelectedDoctor({ selectedDoctor: doctor }));
    localStorage.setItem('doctor', JSON.stringify(doctor));
  }
}
