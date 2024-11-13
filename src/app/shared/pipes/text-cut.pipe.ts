import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textCut',
})
export class TextCutPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    if (value.length > 100) {
      return value.slice(0, 100) + '...';
    }
    return value;
  }
}
