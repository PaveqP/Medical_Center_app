import { createReducer, on } from '@ngrx/store';
import { UserState } from './user.model';
import { loginDoctor, loginPatient, logoutUser } from './user.actions';

export const initialState: UserState = {
  user: null,
  role: null,
  isAuth: false,
};

export const userReducer = createReducer(
  initialState,
  on(loginDoctor, (state, { doctor }) => ({
    user: doctor,
    role: 'doctor',
    isAuth: true,
  })),
  on(loginPatient, (state, { patient }) => ({
    user: patient,
    role: 'patient',
    isAuth: true,
  })),
  on(logoutUser, () => initialState)
);
