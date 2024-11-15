import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientDetailsRoutingModule } from './patient-details-routing.module';
import { PatientDetailsComponent } from './patient-details.component';
import { AuthHeaderComponent } from '../../shared/components/auth-header/auth-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedPipesModule } from '../../shared/pipes/shared-pipes.module';

@NgModule({
  declarations: [PatientDetailsComponent],
  imports: [
    CommonModule,
    PatientDetailsRoutingModule,
    AuthHeaderComponent,
    ReactiveFormsModule,
    FormsModule,
    SharedPipesModule,
  ],
})
export class PatientDetailsModule {}
