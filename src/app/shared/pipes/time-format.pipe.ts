import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat',
})
export class TimeFormatPipe implements PipeTransform {
  transform(value: string | null | undefined, ...args: unknown[]): string {
    return value ? value.slice(0, 5) : '';
  }
}
