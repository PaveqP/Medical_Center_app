import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginUiService } from '../../../../shared/services/login/login-ui.service';
import { AuthRequestType } from '../../../../shared/data/auth.types';

@Component({
  selector: 'app-doctor-login-form',
  templateUrl: './doctor-login-form.component.html',
  styleUrl: './doctor-login-form.component.scss',
})
export class DoctorLoginFormComponent {
  protected doctorLoginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  constructor(private readonly uiService: LoginUiService) {}

  protected login() {
    if (this.doctorLoginForm.valid) {
      this.uiService
        .doctorLogin(this.doctorLoginForm.value as AuthRequestType)
        .subscribe((resp) => {
          console.log(resp);
        });
    } else {
      alert('fucking errors');
    }
  }
}
