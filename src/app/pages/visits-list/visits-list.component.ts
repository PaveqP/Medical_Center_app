import { Component } from '@angular/core';
import { PatientHomeUiService } from '../patient-home/services/patient-home-ui.service';
import { IVisitsResponse } from '../patient-home/data/patient.types';

@Component({
  selector: 'app-visits-list',
  templateUrl: './visits-list.component.html',
  styleUrl: './visits-list.component.scss',
})
export class VisitsListComponent {
  protected allVisits: IVisitsResponse[] = [];
  protected columnNames: string[] = [
    'id',
    'Дата',
    'Время',
    'Врач',
    'Стоимость',
    'Причина обращения',
    'Заключение',
  ];

  // Сделать PatientHomeUiService шаренным
  // Перенести getUserVisits в ngOnInit
  constructor(private readonly uiService: PatientHomeUiService) {
    this.getUserVisits();
  }

  getUserVisits() {
    this.uiService.getPatientAllVisits().subscribe((visits) => {
      if (visits) {
        this.allVisits = visits;
      }
    });
  }
}
