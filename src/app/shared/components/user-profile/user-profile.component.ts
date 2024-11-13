import { Component, inject } from '@angular/core';
import { NZ_MODAL_DATA, NzModalRef } from 'ng-zorro-antd/modal';
import { Patient } from '../../../store/user/user.model';
import { LoginUiService } from '../../services/login/login-ui.service';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { UserUiService } from '../../services/user/user-ui.service';
import { Observable, of } from 'rxjs';
import { IPatientPolicy, IPolicyData } from '../../data/user.types';
import { CommonModule } from '@angular/common';
import { DateFormatPipe } from '../../pipes/date-format.pipe';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
  imports: [
    NzButtonModule,
    CommonModule,
    DateFormatPipe,
    ReactiveFormsModule,
    FormsModule,
  ],
  standalone: true,
})
export class UserProfileComponent {
  protected readonly userData: Patient = inject(NZ_MODAL_DATA);
  protected readonly userRole: string = this.cookieService.get('current_role');
  protected policy$: Observable<IPatientPolicy | null> = of(null);

  protected policyForm = new FormGroup({
    number: new FormControl('', Validators.required),
    expiredDate: new FormControl('', Validators.required),
  });

  constructor(
    private readonly modalRef: NzModalRef,
    private readonly loginUiService: LoginUiService,
    private readonly userUiService: UserUiService,
    private readonly cookieService: CookieService
  ) {
    this.getUserPolicy();
    console.log(this.userData);
  }

  closeModal() {
    this.modalRef.destroy();
  }

  logoutUser() {
    //const confirmLogout: boolean = confirm('Подтвердите выход из аккаунта');
    // if (confirmLogout) {
    this.loginUiService.logoutUser();
    this.closeModal();
    console.log('closed!');
    // }
  }

  setPatientPolicy() {
    this.userUiService
      .setPatientPolicy(this.policyForm.value as IPolicyData)
      .subscribe((response) => {
        if (response) {
          this.getUserPolicy();
        }
      });
  }

  getUserPolicy() {
    this.policy$ = this.userUiService.getPatientPolicy();
  }
}
