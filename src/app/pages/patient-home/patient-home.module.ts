import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientHomeComponent } from './patient-home.component';
import { PatientHomeRoutingModule } from './patient-home-routing.module';

@NgModule({
  declarations: [PatientHomeComponent],
  imports: [CommonModule, PatientHomeRoutingModule],
})
export class PatientHomeModule {}
