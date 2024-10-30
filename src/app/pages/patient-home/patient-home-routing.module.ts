import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientHomeComponent } from './patient-home.component';

const routes: Routes = [
  {
    path: '',
    component: PatientHomeComponent,
    children: [
      {
        path: 'doctor',
        loadChildren: () =>
          import('../select-doctor/select-doctor.module').then(
            (m) => m.SelectDoctorModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientHomeRoutingModule {}
