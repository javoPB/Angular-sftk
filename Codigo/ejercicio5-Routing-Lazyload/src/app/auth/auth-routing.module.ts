import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './pages/forgot/forgot.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

//El path principal se deja vacío, para que se puede asignar de forma 
//dinamica el path que se indique en el app-routing (routing principal de la aplicación)
const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'forgot', component: ForgotComponent},
      {path: 'login', component: LoginComponent},
      {path: 'registro', component: RegistroComponent},
      {path: '**', redirectTo: 'login'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
