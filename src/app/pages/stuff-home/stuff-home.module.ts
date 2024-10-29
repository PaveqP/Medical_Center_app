import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StuffHomeComponent } from './stuff-home.component';
import { StuffHomeRoutingModule } from './stuff-home-routing.module';

@NgModule({
  declarations: [StuffHomeComponent],
  imports: [CommonModule, StuffHomeRoutingModule],
})
export class StuffHomeModule {}
