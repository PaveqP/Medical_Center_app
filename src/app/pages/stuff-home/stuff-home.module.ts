import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StuffHomeComponent } from './stuff-home.component';
import { StuffHomeRoutingModule } from './stuff-home-routing.module';
import { AuthHeaderComponent } from '../../shared/components/auth-header/auth-header.component';

@NgModule({
  declarations: [StuffHomeComponent],
  imports: [CommonModule, StuffHomeRoutingModule, AuthHeaderComponent],
})
export class StuffHomeModule {}
