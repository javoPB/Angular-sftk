import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscarComponent } from './buscar/buscar.component';
import { AgregarComponent } from './agregar/agregar.component';
import { EditarComponent } from './editar/editar.component';
import { EliminarComponent } from './eliminar/eliminar.component';



@NgModule({
  declarations: [
    BuscarComponent,
    AgregarComponent,
    EditarComponent,
    EliminarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaisesModule { }
