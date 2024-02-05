import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { AdminLibrosComponent } from './admin-libros/admin-libros.component';
import { ConsultarLibrosComponent } from './consultar-libros/consultar-libros.component';
import { RegistrarLibrosComponent } from './registrar-libros/registrar-libros.component';
import { EditarLibrosComponent } from './editar-libros/editar-libros.component';


@NgModule({
  declarations: [
    AdminLibrosComponent,
    ConsultarLibrosComponent,
    RegistrarLibrosComponent,
    EditarLibrosComponent
  ],
  imports: [
    CommonModule,
    LibrosRoutingModule
  ]
})
export class LibrosModule { }
