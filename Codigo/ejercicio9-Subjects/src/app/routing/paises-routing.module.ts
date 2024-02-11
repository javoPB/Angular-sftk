import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from '../paises/agregar/agregar.component';
import { BuscarComponent } from '../paises/buscar/buscar.component';
import { EditarComponent } from '../paises/editar/editar.component';
import { EliminarComponent } from '../paises/eliminar/eliminar.component';
import { RouterModule, Routes } from '@angular/router';
import { PadreComponent } from '../ejemploSubject/padre/padre.component';

const paisesRoutes: Routes = [
  {path: "padre", component: PadreComponent},
  {path: "agregar", component: AgregarComponent},
  {path: "buscar", component: BuscarComponent},
  {path: "editar/:id", component: EditarComponent},
  {path: "eliminar/:id", component: EliminarComponent},
  {path: "**", redirectTo: "buscar"}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(paisesRoutes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class PaisesRoutingModule { }
