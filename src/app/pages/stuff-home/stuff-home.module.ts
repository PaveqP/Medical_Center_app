import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StuffHomeComponent } from './stuff-home.component';
import { StuffHomeRoutingModule } from './stuff-home-routing.module';
import { AuthHeaderComponent } from '../../shared/components/auth-header/auth-header.component';
import { FutureConsultationsComponent } from './components/future-consultations/future-consultations.component';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzCardModule } from 'ng-zorro-antd/card';
import { PastConsultationsComponent } from './components/past-consultations/past-consultations.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { SharedPipesModule } from '../../shared/pipes/shared-pipes.module';

@NgModule({
  declarations: [
    StuffHomeComponent,
    FutureConsultationsComponent,
    PastConsultationsComponent,
  ],
  imports: [
    CommonModule,
    StuffHomeRoutingModule,
    AuthHeaderComponent,
    NzPaginationModule,
    NzCardModule,
    NzButtonModule,
    NzToolTipModule,
    SharedPipesModule,
  ],
})
export class StuffHomeModule {}
