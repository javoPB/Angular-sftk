import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLibrosComponent } from './admin-libros/admin-libros.component';
import { ConsultarLibrosComponent } from './consultar-libros/consultar-libros.component';
import { EditarLibrosComponent } from './editar-libros/editar-libros.component';
import { RegistrarLibrosComponent } from './registrar-libros/registrar-libros.component';

//Se definen cada una de las rutas hijas del módulo
//El path principal se deja vacío para que se pueda asignar dinamincamente desde donde se consumas las rutas
const routes: Routes = [
  {
    path: "",
    children: [
      {path: "admin-libros", component: AdminLibrosComponent},
      {path: "consultar-libros", component: ConsultarLibrosComponent},
      {path: "editar-libros", component: EditarLibrosComponent},
      {path: "registrar-libros", component: RegistrarLibrosComponent},
      {path: "**", redirectTo: "consultar-libros"}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibrosRoutingModule { }

