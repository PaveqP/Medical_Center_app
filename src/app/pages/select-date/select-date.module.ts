import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectDateRoutingModule } from './select-date-routing.module';
import { SelectDateComponent } from './select-date.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { DateModalComponent } from './date-modal/date-modal.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AuthHeaderComponent } from '../../shared/components/auth-header/auth-header.component';
import { DateUiService } from './services/date-ui.service';

@NgModule({
  declarations: [SelectDateComponent, DateModalComponent],
  imports: [
    CommonModule,
    SelectDateRoutingModule,
    NzCardModule,
    NzButtonModule,
    AuthHeaderComponent,
  ],
})
export class SelectDateModule {}
