import { Component } from '@angular/core';
import { PatientHomeUiService } from '../../services/patient-home-ui.service';
import { IVisitsResponse } from '../../data/patient.types';

@Component({
  selector: 'app-future-visits',
  templateUrl: './future-visits.component.html',
  styleUrl: './future-visits.component.scss',
})
export class FutureVisitsComponent {
  constructor(private readonly uiService: PatientHomeUiService) {}

  protected visits: IVisitsResponse[] | null = [];

  displayedCards: IVisitsResponse[] = [];
  currentPage = 1;
  pageSize = 6;
  selected_specialization: string | null = null;

  ngOnInit(): void {
    this.getUserVisits();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.updateDisplayedCards();
  }

  private updateDisplayedCards(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    if (this.visits) {
      this.displayedCards = this.visits.slice(startIndex, endIndex);
    }
  }

  private getUserVisits() {
    this.uiService.getPatientFutureVisits().subscribe((futureVisits) => {
      this.visits = futureVisits;
      this.updateDisplayedCards();
    });
  }
}
