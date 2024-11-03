import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/app.state';
import {
  selectApplication,
  selectSpecializations,
} from '../../../../store/application/application.selectors';
import { Observable } from 'rxjs';
import {
  ApplicationState,
  Specialization,
} from '../../../../store/application/application.model';
import { SelectedSpecialization } from '../../../../store/application/application.actions';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.scss',
})
export class AppointmentComponent implements OnInit {
  specializations$: Observable<Specialization[]> | undefined;
  displayedCards: Specialization[] = [];
  currentPage = 1;
  pageSize = 6;
  selected_specialization: string | null = null;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.specializations$ = this.store.select(selectSpecializations);
    this.specializations$.subscribe((specializations) => {
      this.updateDisplayedCards(specializations);
    });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    if (this.specializations$) {
      this.specializations$.subscribe((specializations: any) => {
        this.updateDisplayedCards(specializations);
      });
    }
  }

  selectSpecialization(specialization: Specialization) {
    this.store.dispatch(
      SelectedSpecialization({ selectedSpecialization: specialization })
    );
    localStorage.setItem('specialization', JSON.stringify(specialization));
    this.selected_specialization = specialization.name;
  }

  private updateDisplayedCards(specializations: Specialization[]): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedCards = specializations.slice(startIndex, endIndex);
  }
}
