import { createAction, props } from '@ngrx/store';
import { Doctor, Patient } from './user.model';

export const loginDoctor = createAction(
  '[User] Login Doctor',
  props<{ doctor: Doctor }>()
);

export const loginPatient = createAction(
  '[User] Login Patient',
  props<{ patient: Patient }>()
);

export const logoutUser = createAction('[User] Logout User');
