import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: 'appElementHover',
  exportAs: 'child'
})
export class ElementHoverDirective {
  numberOfClicks = 0;
  numberOfMouseOver = 0;
  style: string = "colorTest";
  classStyle: string = "";

  @Output() numberEE: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  @HostListener('click', ['$event.target'])
  onClick(btn: any) {
    console.log('button', btn, 'number of clicks:', this.numberOfClicks++);
  }

  @HostListener('mouseover', ['$event.target'])
  mouseOver(element: any){
    this.numberEE.emit(this.numberOfMouseOver % 2);

    console.log('element: ', element, 'number of mouse-over: ', this.numberOfMouseOver++, '---->', (this.numberOfMouseOver % 2));
  }
}
