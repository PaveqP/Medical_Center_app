import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { selectUserRole } from '../../store/user/user.selectors';
import { filter, map, take } from 'rxjs';
import { LoginUiService } from '../services/login/login-ui.service';

export const canActivateHome = () => {
  const store = inject(Store<AppState>);
  const router = inject(Router);
  const loginUiService = inject(LoginUiService);

  if (!loginUiService.isUserAuth) {
    return router.navigate(['/login']);
  }

  return store.select(selectUserRole).pipe(
    filter((role) => role !== null),
    take(1),
    map((role) => {
      if (role === 'patient') return true;
      return router.navigate(['/login']);
    })
  );
};

export const canActivateStuff = () => {
  const store = inject(Store<AppState>);
  const router = inject(Router);
  const loginUiService = inject(LoginUiService);

  if (!loginUiService.isUserAuth) {
    return router.navigate(['/login']);
  }

  return store.select(selectUserRole).pipe(
    filter((role) => role !== null),
    take(1),
    map((role) => {
      if (role === 'doctor') return true;
      return router.navigate(['/login']);
    })
  );
};
