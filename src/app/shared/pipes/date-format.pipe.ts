import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
  standalone: true,
})
export class DateFormatPipe implements PipeTransform {
  transform(value: string | undefined, ...args: unknown[]): string {
    value = value?.split('T')[0];
    return value ? value : '';
  }
}
