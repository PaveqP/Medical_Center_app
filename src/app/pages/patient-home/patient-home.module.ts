import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientHomeComponent } from './patient-home.component';
import { PatientHomeRoutingModule } from './patient-home-routing.module';
import { AuthHeaderComponent } from '../../shared/components/auth-header/auth-header.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { FutureVisitsComponent } from './components/future-visits/future-visits.component';
import { PastVisitsComponent } from './components/past-visits/past-visits.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { VisitActionsComponent } from './ui/visit-actions/visit-actions.component';

@NgModule({
  declarations: [
    PatientHomeComponent,
    AppointmentComponent,
    FutureVisitsComponent,
    PastVisitsComponent,
    VisitActionsComponent,
  ],
  imports: [
    CommonModule,
    PatientHomeRoutingModule,
    AuthHeaderComponent,
    NzCardModule,
    NzPaginationModule,
  ],
})
export class PatientHomeModule {}
