import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { selectSelectedConsultation } from '../../store/application/application.selectors';
import { map } from 'rxjs';
import { ConsultationUiService } from './services/consultation-ui.service';
import {
  IConsultationFull,
  IVisitsResponse,
} from '../patient-home/data/patient.types';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { completeData } from './services/consultation-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrl: './consultation.component.scss',
})
export class ConsultationComponent {
  protected consultationInfo: Partial<IConsultationFull> | null | undefined =
    null;
  protected patientInfo: Partial<IConsultationFull> | null | undefined = null;

  protected consultationForm = new FormGroup({
    diagnosis: new FormControl('', Validators.required),
    recommendations: new FormControl('', Validators.required),
  });

  constructor(
    private readonly store: Store<AppState>,
    private readonly uiService: ConsultationUiService,
    private readonly router: Router
  ) {
    this.getConsultation();
  }

  private getConsultation() {
    this.store
      .select(selectSelectedConsultation)
      .pipe(
        map((value) => {
          if (!value) {
            const storedConsultation = localStorage.getItem('consultation');
            return storedConsultation ? JSON.parse(storedConsultation) : null;
          }
          return value;
        })
      )
      .subscribe((consultation: IVisitsResponse) => {
        console.log(consultation);
        this.uiService
          .getConsultationById(consultation.id)
          .subscribe((result) => {
            this.consultationInfo = result?.consultation;
            this.patientInfo = result?.patient;
            console.log(this.consultationInfo);
            console.log(this.patientInfo);
          });
      });
  }

  protected submitConsultation() {
    const completeConsultationData = {
      id: this.consultationInfo?.id,
      ...this.consultationForm.value,
    } as completeData;
    this.uiService
      .completeConsultation(completeConsultationData)
      .subscribe((resp) => {
        if (resp) {
          this.router.navigate(['/stuff']);
        }
      });
  }
}
