import { createAction, props } from '@ngrx/store';
import { Specialization } from './application.model';

export const Specializations = createAction(
  '[Application] Specializations',
  props<{ specializations: Specialization[] }>()
);

export const SelectedSpecialization = createAction(
  '[Application] SelectedSpecialization',
  props<{ selectedSpecialization: Specialization }>()
);
