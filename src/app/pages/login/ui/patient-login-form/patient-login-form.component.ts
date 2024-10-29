import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginUiService } from '../../../../shared/services/login/login-ui.service';
import { AuthRequestType } from '../../../../shared/data/auth.types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-login-form',
  templateUrl: './patient-login-form.component.html',
  styleUrl: './patient-login-form.component.scss',
})
export class PatientLoginFormComponent {
  protected loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  constructor(
    private readonly uiService: LoginUiService,
    private readonly router: Router
  ) {}

  login() {
    if (this.loginForm.valid) {
      this.uiService
        .patientLogin(this.loginForm.value as AuthRequestType)
        .subscribe((resp) => {
          console.log('resp', resp);
        });
    } else {
      alert('fucking errors');
    }
  }

  registration() {
    this.router.navigate(['registration']);
  }
}
