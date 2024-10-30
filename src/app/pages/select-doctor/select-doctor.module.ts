import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectDoctorComponent } from './select-doctor.component';
import { SelectDoctorRoutingModule } from './select-doctor-routing.module';

@NgModule({
  declarations: [SelectDoctorComponent],
  imports: [CommonModule, SelectDoctorRoutingModule],
})
export class SelectDoctorModule {}
