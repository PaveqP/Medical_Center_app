import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectDoctorComponent } from './select-doctor.component';

const routes: Routes = [
  {
    path: '',
    component: SelectDoctorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectDoctorRoutingModule {}
