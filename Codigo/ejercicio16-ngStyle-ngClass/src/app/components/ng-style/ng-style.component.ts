import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [ngStyle]="{'font-size': tamano+'px'}">
      ng-style works!
    </p>

    <p [style.fontSize.px]="tamano">
      ng-style works!
    </p>

    <button class="btn btn-primary" type="button" (click)="tamano=tamano+5">
      <i class="fa fa-plus"></i>
    </button>
    <button class="btn btn-primary" type="button" (click)="tamano=tamano-5">
    <i class="fa fa-minus"></i>
    </button>

  `,
  styles: ``
})
export class NgStyleComponent {
  tamano: number = 20;

}
