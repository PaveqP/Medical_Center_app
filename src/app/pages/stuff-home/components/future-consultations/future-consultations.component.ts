import { Component } from '@angular/core';
import { StuffHomeUiService } from '../../services/stuff-home-ui.service';
import { IVisitsResponse } from '../../../patient-home/data/patient.types';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/app.state';
import { SelectedConsultation } from '../../../../store/application/application.actions';

@Component({
  selector: 'app-future-consultations',
  templateUrl: './future-consultations.component.html',
  styleUrl: './future-consultations.component.scss',
})
export class FutureConsultationsComponent {
  constructor(
    private readonly uiService: StuffHomeUiService,
    private readonly store: Store<AppState>
  ) {}

  protected consultations: IVisitsResponse[] | null = [];

  displayedCards: IVisitsResponse[] = [];
  currentPage = 1;
  pageSize = 6;
  selected_consultation: IVisitsResponse | null = null;

  ngOnInit(): void {
    this.getUserConsultations();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.updateDisplayedCards();
  }

  selectConsultation(consultation: IVisitsResponse) {
    this.store.dispatch(
      SelectedConsultation({ selectedConsultation: consultation })
    );
    localStorage.setItem('consultation', JSON.stringify(consultation));
    this.selected_consultation = consultation;
  }

  private updateDisplayedCards(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    if (this.consultations) {
      this.displayedCards = this.consultations.slice(startIndex, endIndex);
    }
  }

  private getUserConsultations() {
    this.uiService.getFutureConsultations().subscribe((futureConsultations) => {
      this.consultations = futureConsultations;
      this.updateDisplayedCards();
    });
  }
}
