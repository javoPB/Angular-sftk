import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { USUARIO_ROUTES } from './components/usuario/usuario-routes';

const APP_ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'usuario/:id', 
   component: UsuarioComponent,
   children: USUARIO_ROUTES 
   /*[
    {path: 'nuevo', component: UsuarioNuevoComponent},
    {path: 'editar', component: UsuarioEditarComponent},
    {path: 'detalle', component: UsuarioDetalleComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'detalle'},
    
   ]*/
  },
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
