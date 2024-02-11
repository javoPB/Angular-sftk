import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from '../paises/agregar/agregar.component';
import { BuscarComponent } from '../paises/buscar/buscar.component';
import { EditarComponent } from '../paises/editar/editar.component';
import { EliminarComponent } from '../paises/eliminar/eliminar.component';


const paisesRoutes: Routes = [
  {path: "agregar", component: AgregarComponent},
  {path: "buscar", component: BuscarComponent},
  {path: "editar/:id", component: EditarComponent},
  {path: "eliminar/:id", component: EliminarComponent},
  {path: "**", redirectTo: "buscar"}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(paisesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PaisesRoutingModule { }
