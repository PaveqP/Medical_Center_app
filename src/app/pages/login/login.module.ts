import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { PatientLoginFormComponent } from './ui/patient-login-form/patient-login-form.component';
import { DoctorLoginFormComponent } from './ui/doctor-login-form/doctor-login-form.component';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    PatientLoginFormComponent,
    DoctorLoginFormComponent,
  ],
  imports: [CommonModule, LoginRoutingModule, ReactiveFormsModule, FormsModule],
})
export class LoginModule {}
