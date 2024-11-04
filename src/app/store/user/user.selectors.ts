import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectUser = (state: AppState) => state.user;

export const selectUserRole = createSelector(
  selectUser,
  (userState) => userState.role
);

export const selectUserModel = createSelector(
  selectUser,
  (userState) => userState.user
);

export const selectIsAuthenticated = createSelector(
  selectUser,
  (userState) => userState.isAuth
);
