import { createReducer, on } from '@ngrx/store';
import { ApplicationState } from './application.model';
import {
  SelectedDoctor,
  SelectedSpecialization,
  SelectedConsultation,
  Specializations,
} from './application.actions';

export const initialState: ApplicationState = {
  specializations: [],
  selectedSpecialization: null,
  selectedDoctor: null,
  selectedConsultation: null,
};

export const applicationReducer = createReducer(
  initialState,
  on(Specializations, (state, { specializations }) => ({
    specializations: specializations,
    selectedSpecialization: state.selectedSpecialization,
    selectedDoctor: state.selectedDoctor,
    selectedConsultation: state.selectedConsultation,
  })),
  on(SelectedSpecialization, (state, { selectedSpecialization }) => ({
    specializations: state.specializations,
    selectedSpecialization: selectedSpecialization,
    selectedDoctor: state.selectedDoctor,
    selectedConsultation: state.selectedConsultation,
  })),
  on(SelectedDoctor, (state, { selectedDoctor }) => ({
    specializations: state.specializations,
    selectedSpecialization: state.selectedSpecialization,
    selectedDoctor: selectedDoctor,
    selectedConsultation: state.selectedConsultation,
  })),
  on(SelectedConsultation, (state, { selectedConsultation }) => ({
    specializations: state.specializations,
    selectedSpecialization: state.selectedSpecialization,
    selectedDoctor: state.selectedDoctor,
    selectedConsultation: selectedConsultation,
  }))
);
