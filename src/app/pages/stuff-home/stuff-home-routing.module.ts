import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StuffHomeComponent } from './stuff-home.component';

const routes: Routes = [
  {
    path: '',
    component: StuffHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StuffHomeRoutingModule {}
