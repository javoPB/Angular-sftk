import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeDeEjemplo'
})
export class PipeDeEjemploPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
