import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { PatientLoginFormComponent } from './ui/patient-login-form/patient-login-form.component';
import { DoctorLoginFormComponent } from './ui/doctor-login-form/doctor-login-form.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: 'patient',
        component: PatientLoginFormComponent,
      },
      {
        path: 'doctor',
        component: DoctorLoginFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
