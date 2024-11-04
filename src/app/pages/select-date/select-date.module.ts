import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectDateRoutingModule } from './select-date-routing.module';
import { SelectDateComponent } from './select-date.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { DateModalComponent } from './date-modal/date-modal.component';

@NgModule({
  declarations: [SelectDateComponent, DateModalComponent],
  imports: [CommonModule, SelectDateRoutingModule, NzCardModule],
})
export class SelectDateModule {}
