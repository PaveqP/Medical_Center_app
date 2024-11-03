import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectDateComponent } from './select-date.component';

const routes: Routes = [
  {
    path: '',
    component: SelectDateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectDateRoutingModule {}
