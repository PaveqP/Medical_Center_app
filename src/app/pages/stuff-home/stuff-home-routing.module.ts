import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StuffHomeComponent } from './stuff-home.component';

const routes: Routes = [
  {
    path: '',
    component: StuffHomeComponent,
  },
  {
    path: 'consultation',
    loadChildren: () =>
      import('../consultation/consultation.module').then(
        (m) => m.ConsultationModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StuffHomeRoutingModule {}
