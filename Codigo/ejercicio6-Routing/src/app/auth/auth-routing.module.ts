import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

//Se definen cada una de las rutas hijas del módulo
//El path principal se deja vacío para que se pueda asignar dinamincamente desde donde se consumas las rutas
const routes: Routes = [
  {
    path: "",
    children: [
      {path: "auth", component: AuthComponent},
      {path: "forgot-password", component: ForgotPasswordComponent},
      {path: "login", component: LoginComponent},
      {path: "signup", component: SignupComponent},
      {path: "**", redirectTo: "auth"}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
