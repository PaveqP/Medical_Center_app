import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectDoctorComponent } from './select-doctor.component';
import { SelectDoctorRoutingModule } from './select-doctor-routing.module';
import { AuthHeaderComponent } from '../../shared/components/auth-header/auth-header.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';

@NgModule({
  declarations: [SelectDoctorComponent],
  imports: [
    CommonModule,
    SelectDoctorRoutingModule,
    AuthHeaderComponent,
    NzCardModule,
    NzModalModule,
  ],
})
export class SelectDoctorModule {}
