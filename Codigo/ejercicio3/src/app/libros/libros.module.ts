import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLibrosComponent } from './admin-libros/admin-libros.component';
import { ConsultarComponent } from './consultar/consultar.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { EditarComponent } from './editar/editar.component';



@NgModule({
  declarations: [
    AdminLibrosComponent,
    ConsultarComponent,
    RegistrarComponent,
    EditarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LibrosModule { }
