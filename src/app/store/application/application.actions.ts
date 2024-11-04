import { createAction, props } from '@ngrx/store';
import { Specialization } from './application.model';
import { DoctorModel } from '../../shared/data/user.types';

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
