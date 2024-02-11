import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { BuscarLibrosComponent } from '../libros/buscar-libros/buscar-libros.component';
import { EditarLibrosComponent } from '../libros/editar-libros/editar-libros.component';
import { AgregarLibrosComponent } from '../libros/agregar-libros/agregar-libros.component';
import { EliminarLibrosComponent } from '../libros/eliminar-libros/eliminar-libros.component';
import { BuscarPrestamoComponent } from '../prestamos/buscar-prestamo/buscar-prestamo.component';
import { AgregarPrestamoComponent } from '../prestamos/agregar-prestamo/agregar-prestamo.component';
import { EditarPrestamoComponent } from '../prestamos/editar-prestamo/editar-prestamo.component';
import { EliminarPrestamoComponent } from '../prestamos/eliminar-prestamo/eliminar-prestamo.component';
import { BuscarUsuariosComponent } from '../usuarios/buscar-usuarios/buscar-usuarios.component';
import { AgregarUsuariosComponent } from '../usuarios/agregar-usuarios/agregar-usuarios.component';
import { EditarUsuariosComponent } from '../usuarios/editar-usuarios/editar-usuarios.component';
import { EliminarUsuariosComponent } from '../usuarios/eliminar-usuarios/eliminar-usuarios.component';


const bibliotecaRoutes: Routes = [
  {path: "libros/buscar", component: BuscarLibrosComponent},
  {path: "libros/agregar", component: AgregarLibrosComponent},
  {path: "libros/editar", component: EditarLibrosComponent},
  {path: "libros/eliminar", component: EliminarLibrosComponent},

  {path: "prestamos/buscar", component: BuscarPrestamoComponent},
  {path: "prestamos/agregar", component: AgregarPrestamoComponent},
  {path: "prestamos/editar", component: EditarPrestamoComponent},
  {path: "prestamos/eliminar", component: EliminarPrestamoComponent},

  {path: "usuarios/buscar", component: BuscarUsuariosComponent},
  {path: "usuarios/agregar", component: AgregarUsuariosComponent},
  {path: "usuarios/editar", component: EditarUsuariosComponent},
  {path: "usuarios/eliminar", component: EliminarUsuariosComponent},

  {path: "**", redirectTo: "libros/buscar"}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(bibliotecaRoutes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class BibliotecaRoutingModule { }
