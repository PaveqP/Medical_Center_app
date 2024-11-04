import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { ApplicationState } from './application.model';

export const selectApplication = (state: AppState) => state.application;

export const selectSpecializations = createSelector(
  selectApplication,
  (applicationState: ApplicationState) => applicationState.specializations
);

export const selectSelectedSpecialization = createSelector(
  selectApplication,
  (applicationState: ApplicationState) =>
    applicationState.selectedSpecialization
);

export const selectSelectedDoctor = createSelector(
  selectApplication,
  (applicationState: ApplicationState) => applicationState.selectedDoctor
);
