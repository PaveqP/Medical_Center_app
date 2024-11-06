import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitsListRoutingModule } from './visits-list-routing.module';
import { VisitsListComponent } from './visits-list.component';
import { AuthHeaderComponent } from '../../shared/components/auth-header/auth-header.component';
import { NzTableModule } from 'ng-zorro-antd/table';

@NgModule({
  declarations: [VisitsListComponent],
  imports: [
    CommonModule,
    VisitsListRoutingModule,
    AuthHeaderComponent,
    NzTableModule,
  ],
})
export class VisitsListModule {}
