// import {
//   HttpHandlerFn,
//   HttpInterceptorFn,
//   HttpRequest,
// } from '@angular/common/http';
// import { inject } from '@angular/core';
// import { LoginApiService } from '../services/login/login-api.service';
// import { catchError, switchMap, throwError } from 'rxjs';

// let isRefreshing: boolean = false;

// export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {
//   const token = inject(LoginApiService).access_token;
//   const authService = inject(LoginApiService);

//   if (!token) return next(req);

//   if (isRefreshing) {
//     return refreshAndProceed(authService, req, next);
//   }

//   return next(addToken(req, token)).pipe(
//     catchError((error) => {
//       if (error.status === 403) {
//         return refreshAndProceed(authService, req, next);
//       }

//       return throwError(error);
//     })
//   );
// };

// const refreshAndProceed = (
//   authService: LoginApiService,
//   req: HttpRequest<any>,
//   next: HttpHandlerFn
// ) => {
//   if (!isRefreshing) {
//     isRefreshing = true;
//     return authService.refreshAuthToken().pipe(
//       switchMap((res) => {
//         isRefreshing = false;
//         return next(addToken(req, res.access_token));
//       })
//     );
//   }

//   return next(addToken(req, authService.access_token!));
// };

// const addToken = (req: HttpRequest<any>, token: string) => {
//   return req.clone({
//     setHeaders: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
// };
