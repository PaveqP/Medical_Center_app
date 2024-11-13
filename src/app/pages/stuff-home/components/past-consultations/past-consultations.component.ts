import { Component } from '@angular/core';
import { StuffHomeUiService } from '../../services/stuff-home-ui.service';
import { IVisitsResponse } from '../../../patient-home/data/patient.types';

@Component({
  selector: 'app-past-consultations',
  templateUrl: './past-consultations.component.html',
  styleUrl: './past-consultations.component.scss',
})
export class PastConsultationsComponent {
  constructor(private readonly uiService: StuffHomeUiService) {}

  protected consultations: IVisitsResponse[] | null = [];
  displayedCards: IVisitsResponse[] = [];
  currentPage = 1;
  pageSize = 6;
  selected_specialization: string | null = null;

  ngOnInit(): void {
    this.getUserConsultations();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.updateDisplayedCards();
  }

  private updateDisplayedCards(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    if (this.consultations) {
      this.displayedCards = this.consultations.slice(startIndex, endIndex);
    }
  }

  private getUserConsultations() {
    this.uiService.getPastConsultations().subscribe((pastConsultations) => {
      this.consultations = pastConsultations;
      this.updateDisplayedCards();
    });
  }
}
