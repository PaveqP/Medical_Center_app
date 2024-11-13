import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultationComponent } from './consultation.component';
import { ConsultationRoutingModule } from './consultation-routing.module';
import { AuthHeaderComponent } from '../../shared/components/auth-header/auth-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ConsultationComponent],
  imports: [
    CommonModule,
    ConsultationRoutingModule,
    AuthHeaderComponent,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class ConsultationModule {}
