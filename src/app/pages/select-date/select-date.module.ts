import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectDateRoutingModule } from './select-doctor-routing.module';
import { SelectDateComponent } from './select-date.component';

@NgModule({
  declarations: [SelectDateComponent],
  imports: [CommonModule, SelectDateRoutingModule],
})
export class SelectDateModule {}
