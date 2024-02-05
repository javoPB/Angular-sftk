import { Component, Input } from '@angular/core';
import { Libro } from '../modelo/libro';

@Component({
  selector: 'app-componente-hijo',
  templateUrl: './componente-hijo.component.html',
  styleUrl: './componente-hijo.component.css'
})
export class ComponenteHijoComponent {
  @Input() infoLibro: any;
  
  viewFlag: boolean = true;

  mostrarInfo(): void{
    this.viewFlag = true;
  }

  ocultarInfo(): void {
    this.viewFlag = false;
  }

}
