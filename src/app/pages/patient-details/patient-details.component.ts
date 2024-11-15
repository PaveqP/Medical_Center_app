import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { selectUserModel } from '../../store/user/user.selectors';
import { Doctor, Patient } from '../../store/user/user.model';
import { Specialization } from '../../store/application/application.model';
import {
  selectSelectedDoctor,
  selectSelectedSpecialization,
} from '../../store/application/application.selectors';
import { map } from 'rxjs';
import { PatientDetailsUiService } from './services/patient-details-ui.service';
import { IConsultation } from './data/consultation.types';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-confirm',
  templateUrl: './patient-details.component.html',
  styleUrl: './patient-details.component.scss',
})
export class PatientDetailsComponent {
  protected userData: Patient | Doctor | null = null;
  protected specialization: Specialization | null = null;
  protected doctor: Doctor | null = null;
  protected date: string | null = null;
  protected time: string | null = null;

  protected patientReasonForm = new FormGroup({
    reason: new FormControl('', Validators.required),
  });

  constructor(
    private readonly store: Store<AppState>,
    private readonly uiService: PatientDetailsUiService,
    private readonly router: Router
  ) {
    this.loadUserData();
    this.loadSpecialization();
    this.loadDoctor();
    this.loadDate();
  }

  loadUserData() {
    this.store.select(selectUserModel).subscribe((data) => {
      this.userData = data;
    });
  }

  loadSpecialization() {
    this.store
      .select(selectSelectedSpecialization)
      .pipe(
        map((specialization) => {
          if (!specialization) {
            const savedValue = localStorage.getItem('specialization');
            return savedValue ? JSON.parse(savedValue) : null;
          }
          return specialization;
        })
      )
      .subscribe((specialization) => {
        this.specialization = specialization;
      });
  }

  loadDoctor() {
    this.store
      .select(selectSelectedDoctor)
      .pipe(
        map((doctor) => {
          if (!doctor) {
            const savedValue = localStorage.getItem('doctor');
            return savedValue ? JSON.parse(savedValue) : null;
          }
          return doctor;
        })
      )
      .subscribe((doctor) => {
        this.doctor = doctor;
      });
  }

  loadDate() {
    this.date = localStorage.getItem('selectedDateSlot');
    this.time = localStorage.getItem('selectedTimeSlot');
  }

  publishConsultation() {
    if (this.patientReasonForm.value.reason) {
      const data: IConsultation = {
        date: this.date,
        time: this.time,
        id_doctor: this.doctor!.id,
        cost: 100,
        reason: this.patientReasonForm.value.reason,
      };
      this.uiService.createConsultation(data).subscribe((resp) => {
        if (resp) {
          this.router.navigate(['/home']);
        }
      });
    }
  }
}
