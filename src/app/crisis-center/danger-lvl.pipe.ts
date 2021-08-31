import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dangerLvl',
})
export class DangerLvlPipe implements PipeTransform {
  transform(value: number): string {
    return `The danger level is ${value}% `;
  }
}
