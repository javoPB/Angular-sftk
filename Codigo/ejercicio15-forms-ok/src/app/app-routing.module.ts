import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './pages/template/template.component';
import { ReactiveComponent } from './pages/reactive/reactive.component';

const routes: Routes = [
  {path: 'plantilla', component: TemplateComponent},
  {path: 'reactivos', component: ReactiveComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'reactivo'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
