import { Component } from '@angular/core';

@Component({
  selector: 'app-future-visits',
  templateUrl: './future-visits.component.html',
  styleUrl: './future-visits.component.scss',
})
export class FutureVisitsComponent {
  protected readonly visits = [
    'Визит 1',
    'Визит 2',
    'Визит 3',
    'Визит 4',
    'Визит 5',
    'Визит 6',
    'Визит 7',
    'Визит 8',
    'Визит 9',
    'Визит 10',
    'Визит 11',
    'Визит 12',
  ];
  displayedCards: string[] = [];
  currentPage = 1;
  pageSize = 6;
  selected_specialization: string | null = null;

  ngOnInit(): void {
    this.updateDisplayedCards();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.updateDisplayedCards();
  }

  selectSpecialization(name: string) {
    this.selected_specialization = name;
  }

  private updateDisplayedCards(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedCards = this.visits.slice(startIndex, endIndex);
  }
}
