import { createReducer, on } from '@ngrx/store';
import { ApplicationState } from './application.model';
import {
  SelectedDoctor,
  SelectedSpecialization,
  Specializations,
} from './application.actions';

export const initialState: ApplicationState = {
  specializations: [],
  selectedSpecialization: null,
  selectedDoctor: null,
};

export const applicationReducer = createReducer(
  initialState,
  on(Specializations, (state, { specializations }) => ({
    specializations: specializations,
    selectedSpecialization: state.selectedSpecialization,
    selectedDoctor: state.selectedDoctor,
  })),
  on(SelectedSpecialization, (state, { selectedSpecialization }) => ({
    specializations: state.specializations,
    selectedSpecialization: selectedSpecialization,
    selectedDoctor: state.selectedDoctor,
  })),
  on(SelectedDoctor, (state, { selectedDoctor }) => ({
    specializations: state.specializations,
    selectedSpecialization: state.selectedSpecialization,
    selectedDoctor: selectedDoctor,
  }))
);
