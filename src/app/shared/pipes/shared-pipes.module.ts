import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextCutPipe } from './text-cut.pipe';
import { DateFormatPipe } from './date-format.pipe';
import { TimeFormatPipe } from './time-format.pipe';

@NgModule({
  declarations: [TextCutPipe, DateFormatPipe, TimeFormatPipe, TimeFormatPipe],
  imports: [CommonModule],
  exports: [TextCutPipe, DateFormatPipe, TimeFormatPipe],
})
export class SharedPipesModule {}
