import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectDoctorComponent } from './select-doctor.component';

const routes: Routes = [
  {
    path: '',
    component: SelectDoctorComponent,
  },
  {
    path: 'date',
    loadChildren: () =>
      import('../select-date/select-date.module').then(
        (m) => m.SelectDateModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectDoctorRoutingModule {}
