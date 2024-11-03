import { createReducer, on } from '@ngrx/store';
import { ApplicationState } from './application.model';
import { SelectedSpecialization, Specializations } from './application.actions';

export const initialState: ApplicationState = {
  specializations: [],
  selectedSpecialization: null,
};

export const applicationReducer = createReducer(
  initialState,
  on(Specializations, (state, { specializations }) => ({
    specializations: specializations,
    selectedSpecialization: state.selectedSpecialization,
  })),
  on(SelectedSpecialization, (state, { selectedSpecialization }) => ({
    specializations: state.specializations,
    selectedSpecialization: selectedSpecialization,
  }))
);
