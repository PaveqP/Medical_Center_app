import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientDetailsRoutingModule } from './patient-details-routing.module';
import { PatientDetailsComponent } from './patient-details.component';
import { AuthHeaderComponent } from '../../shared/components/auth-header/auth-header.component';

@NgModule({
  declarations: [PatientDetailsComponent],
  imports: [CommonModule, PatientDetailsRoutingModule, AuthHeaderComponent],
})
export class PatientDetailsModule {}
