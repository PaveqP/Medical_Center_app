import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { RegistrationRoutingModule } from './registration-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginHeaderComponent } from '../../shared/components/login-header/login-header.component';

@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    LoginHeaderComponent,
  ],
})
export class RegistrationModule {}
