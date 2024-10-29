import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationUiService } from '../../shared/services/registration/registration-ui.service';
import { AuthRequestType } from '../../shared/data/auth.types';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent {
  protected registrationForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  constructor(
    private readonly router: Router,
    private readonly uiService: RegistrationUiService
  ) {}

  registration() {
    if (this.registrationForm.valid) {
      this.uiService
        .registration(this.registrationForm.value as AuthRequestType)
        .subscribe();
    } else {
      console.log(this.registrationForm.errors);
    }
  }

  login() {
    this.router.navigate(['login/patient']);
  }
}
