import { Component } from '@angular/core';
import { PatientHomeUiService } from '../patient-home/services/patient-home-ui.service';
import { IVisitsResponse } from '../patient-home/data/patient.types';
import { forkJoin, map, of, pipe, switchMap } from 'rxjs';
import { UtilsUiService } from '../../shared/services/utils/utils-ui.service';

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
  constructor(
    private readonly patientUiService: PatientHomeUiService,
    private readonly utilsUiService: UtilsUiService
  ) {
    this.getUserVisits();
  }

  getUserVisits() {
    this.patientUiService.getPatientAllVisits().subscribe((visits) => {
      if (visits) {
        this.allVisits = visits.map((visit) => {
          if (visit.id_conclusion) {
            this.utilsUiService
              .getConclusionById(visit.id_conclusion)
              .subscribe((conclusion) => {
                if (conclusion) {
                  visit.conclusion = conclusion;
                }
              });
          }
          return visit;
        });
      }
    });
  }
}
