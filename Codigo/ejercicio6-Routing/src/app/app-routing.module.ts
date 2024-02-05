import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Se realiza el consumo de las rutas hijas (rutas de los módulos) - Lazyload
const routes: Routes = [
  {
    path: "auth", 
    loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: "libros", 
    loadChildren: () => import("./libros/libros.module").then(m => m.LibrosModule)
  },
  {
    path: "prestamos", 
    loadChildren: () => import("./prestamos/prestamos.module").then(m => m.PrestamosModule)
  },
  {
    path: "**", 
    redirectTo: "auth"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
