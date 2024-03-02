import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addtext'
})
export class AddtextPipe implements PipeTransform {

  transform(value: any, arg: string = '- add text'): unknown {
    return value + arg;
  }

}
