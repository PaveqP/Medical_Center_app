import { createAction, props } from '@ngrx/store';
import { Specialization } from './application.model';
import { DoctorModel } from '../../shared/data/user.types';
import { IVisitsResponse } from '../../pages/patient-home/data/patient.types';

export const Specializations = createAction(
  '[Application] Specializations',
  props<{ specializations: Specialization[] }>()
);

export const SelectedSpecialization = createAction(
  '[Application] SelectedSpecialization',
  props<{ selectedSpecialization: Specialization }>()
);

export const SelectedDoctor = createAction(
  '[Application] SelectedDoctor',
  props<{ selectedDoctor: DoctorModel }>()
);

export const SelectedConsultation = createAction(
  '[Application] SelectedConsultation',
  props<{ selectedConsultation: IVisitsResponse }>()
);
