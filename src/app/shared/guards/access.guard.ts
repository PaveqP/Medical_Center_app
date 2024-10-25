import { inject } from '@angular/core';
import { LoginApiService } from '../../pages/login/services/login-api.service';
import { Router } from '@angular/router';

export const canActivateAuth = () => {
  const isLoggedIn = inject(LoginApiService).isAuth;
  const router = inject(Router);

  if (isLoggedIn) {
    return true;
  }

  return router.createUrlTree(['/login']);
};
