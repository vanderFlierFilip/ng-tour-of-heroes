import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'msgNumHelper',
})
export class MsgNumHelperPipe implements PipeTransform {
  // Transform the value for a given length of messages to a meaningful message
  transform(value: string | number): string {
    if (value === '0' || value === 0) {
      return `You have no messages`;
    }
    return `You have ${
      value === '1' ? `${value} message` : `${value} messages`
    }`;
  }
}
