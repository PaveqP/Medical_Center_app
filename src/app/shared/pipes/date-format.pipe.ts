import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
})
export class DateFormatPipe implements PipeTransform {
  transform(value: string | undefined | null, ...args: unknown[]): string {
    if (value?.includes('T')) {
      value = value?.split('T')[0];
    }
    value = this.changeDateFormat(value!);
    return value ? value : '';
  }

  changeDateFormat(date: string): string {
    if (date.includes('-')) {
      const dateArray = date.split('-');
      date = `${dateArray[2]}.${dateArray[1]}.${dateArray[0]}`;
    }
    return date;
  }
}
