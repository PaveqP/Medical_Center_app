import { Injectable } from '@angular/core';
import { UserApiService } from './user-api.service';
import { IPolicyData, PayloadSpecialization } from '../../data/user.types';
import { NzModalService } from 'ng-zorro-antd/modal';
import { UserProfileComponent } from '../../components/user-profile/user-profile.component';
import { Patient } from '../../../store/user/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserUiService {
  constructor(
    private readonly userApiService: UserApiService,
    private modal: NzModalService
  ) {}

  getDoctorsBySpecialization(payload: PayloadSpecialization) {
    return this.userApiService.getDoctorsBySpecialization(payload);
  }

  getPatientPolicy() {
    return this.userApiService.getPatientPolicy();
  }

  setPatientPolicy(policyData: IPolicyData) {
    return this.userApiService.setPatientPolicy(policyData);
  }

  createUserProfileModal(userData: Patient): void {
    this.modal.create<UserProfileComponent, Patient>({
      nzTitle: `${userData.surname} ${userData.name}`,
      nzContent: UserProfileComponent,
      nzData: userData,
      nzFooter: null,
    });
  }
}
