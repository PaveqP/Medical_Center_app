import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { selectUserRole } from '../../store/user/user.selectors';
import { map } from 'rxjs';

export const canActivateHome = () => {
  const store = inject(Store<AppState>);
  const router = inject(Router);

  return store.select(selectUserRole).pipe(
    map((role) => {
      if (role === 'patient') return true;
      return router.createUrlTree(['/login']);
    })
  );
};

export const canActivateStuff = () => {
  const store = inject(Store<AppState>);
  const router = inject(Router);

  return store.select(selectUserRole).pipe(
    map((role) => {
      if (role === 'doctor') return true;
      return router.createUrlTree(['/login']);
    })
  );
};
