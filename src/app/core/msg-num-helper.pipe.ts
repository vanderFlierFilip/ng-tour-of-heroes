import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'msgNumHelper',
})
export class MsgNumHelperPipe implements PipeTransform {
  transform(value: string): string {
    if (value === '0') {
      return `You have no messages`;
    }
    return `You have ${
      value === '1' ? `${value} message` : `${value} messages`
    }`;
  }
}
