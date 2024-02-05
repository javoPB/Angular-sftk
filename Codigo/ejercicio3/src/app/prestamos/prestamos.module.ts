import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestamosComponent } from './prestamos/prestamos.component';
import { SolicitarComponent } from './solicitar/solicitar.component';
import { DevolucionComponent } from './devolucion/devolucion.component';



@NgModule({
  declarations: [
    PrestamosComponent,
    SolicitarComponent,
    DevolucionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PrestamosModule { }
