import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  canActivateHome,
  canActivateStuff,
} from './shared/guards/access.guard';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('../app/pages/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'registration',
    loadChildren: () =>
      import('../app/pages/registration/registration.module').then(
        (m) => m.RegistrationModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('../app/pages/patient-home/patient-home.module').then(
        (m) => m.PatientHomeModule
      ),
    canActivate: [canActivateHome],
  },
  {
    path: 'stuff',
    loadChildren: () =>
      import('../app/pages/stuff-home/stuff-home.module').then(
        (m) => m.StuffHomeModule
      ),
    canActivate: [canActivateStuff],
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
