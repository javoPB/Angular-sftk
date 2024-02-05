import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevolucionComponent } from './devolucion/devolucion.component';
import { PrestamosComponent } from './prestamos/prestamos.component';
import { SolicitarComponent } from './solicitar/solicitar.component';

//Se definen cada una de las rutas hijas del módulo
//El path principal se deja vacío para que se pueda asignar dinamincamente desde donde se consumas las rutas
const routes: Routes = [
  {
    path: "",
    children: [
      {path: "devolucion", component: DevolucionComponent},
      {path: "prestamo", component: PrestamosComponent},
      {path: "solicitar", component: SolicitarComponent},
      {path: "**", redirectTo: "solicitar"}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrestamosRoutingModule { }
