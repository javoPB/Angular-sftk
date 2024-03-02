import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {
  @Input("appResaltado") nuevoColor: string;
  
  

  constructor(private element: ElementRef) { 
    console.log('Mensaje desde ResaltadoDirective');
  }

  @HostListener('mouseenter') mouseEntro() {
    console.log(this.nuevoColor);
    this.resaltar(this.nuevoColor);
  }

  @HostListener('mouseleave') mouseLeave() {
    this.resaltar('');
  }

  private resaltar(color: string = 'lime'){
    this.element.nativeElement.style.backgroundColor=color;
  }

}
