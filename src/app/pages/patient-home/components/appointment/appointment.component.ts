import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.scss',
})
export class AppointmentComponent implements OnInit {
  protected readonly specializations = [
    'Психиатрия',
    'Травматология',
    'Терапия',
    'Эндокринология',
    'Эллергология - Иммунология',
    'Онкология',
    'Хирургия',
    'Гастроэнтерология',
    'Офтальмология',
    'Отоларингология',
    'Нутрициология',
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
    this.displayedCards = this.specializations.slice(startIndex, endIndex);
  }
}
