import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BibliotecaRoutingModule } from './routing/biblioteca-routing.module';
import { BuscarLibrosComponent } from './libros/buscar-libros/buscar-libros.component';
import { AgregarLibrosComponent } from './libros/agregar-libros/agregar-libros.component';
import { EditarLibrosComponent } from './libros/editar-libros/editar-libros.component';
import { EliminarLibrosComponent } from './libros/eliminar-libros/eliminar-libros.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgregarPrestamoComponent } from './prestamos/agregar-prestamo/agregar-prestamo.component';
import { BuscarPrestamoComponent } from './prestamos/buscar-prestamo/buscar-prestamo.component';
import { EditarPrestamoComponent } from './prestamos/editar-prestamo/editar-prestamo.component';
import { EliminarPrestamoComponent } from './prestamos/eliminar-prestamo/eliminar-prestamo.component';
import { AgregarUsuariosComponent } from './usuarios/agregar-usuarios/agregar-usuarios.component';
import { BuscarUsuariosComponent } from './usuarios/buscar-usuarios/buscar-usuarios.component';
import { EditarUsuariosComponent } from './usuarios/editar-usuarios/editar-usuarios.component';
import { EliminarUsuariosComponent } from './usuarios/eliminar-usuarios/eliminar-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscarLibrosComponent,
    AgregarLibrosComponent,
    EditarLibrosComponent,
    EliminarLibrosComponent,
    AgregarPrestamoComponent,
    BuscarPrestamoComponent,
    EditarPrestamoComponent,
    EliminarPrestamoComponent,
    AgregarUsuariosComponent,
    BuscarUsuariosComponent,
    EditarUsuariosComponent,
    EliminarUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BibliotecaRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
