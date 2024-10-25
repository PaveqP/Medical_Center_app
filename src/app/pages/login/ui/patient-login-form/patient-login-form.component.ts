import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginUiService } from '../../services/login-ui.service';

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

  constructor(private readonly uiService: LoginUiService) {}

  login() {
    if (this.loginForm.valid) {
      this.uiService
        .patientLogin(
          this.loginForm.value as { email: string; password: string }
        )
        .subscribe((resp) => {
          console.log('resp', resp);
        });
    } else {
      alert('fucking errors');
    }
  }
}
