import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextCutPipe } from './text-cut.pipe';

@NgModule({
  declarations: [TextCutPipe],
  imports: [CommonModule],
  exports: [TextCutPipe],
})
export class SharedPipesModule {}
